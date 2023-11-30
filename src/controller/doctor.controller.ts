import { RequestHandler } from 'express'
import { Doctor } from '../models/doctores.model'


//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getDoctor: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findAll()

      res.status(200).json({
        message: 'Operación exitosa',
        data: doctores
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener los doctores',
      error: err.message
    })
  }
}

export const getDoctorById: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findByPk(req.params.id)

    if(doctores) {
      res.status(200).json({
        message: 'Doctores encontrados ✔️',
        data: doctores
      })
    } else {
      res.status(404).json({
        message: 'Doctores no encontrado ❌'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener los doctores',
      error: error.message
    })
  }
}

export const createDoctor: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.create(req.body)

    res.status(201).json({
      message: 'Doctor creado! ✔️',
      data: doctores
    })
  } catch (error:any) {
    res.status(500).json({
      message: 'No se pudo crear el doctor'
    })
  }
}

export const updateDoctor: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findByPk(req.params.id)

    if(doctores){
      await Doctor.update(req.body, {
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor actualizado ✔️'
      })
    } else {
      res.status(404).json({
        message: 'Doctor no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Doctor modificado ✔️',
      error: error.message
    })
  }
}

export const deleteDoctor: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findByPk(req.params.id)

    if(doctores){
      await Doctor.destroy({
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor eliminado ☠️'
      })
    } else {
      res.status(404).json({
        message: 'Doctor no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Doctor modificado ✔️',
      error: error.message
    })
  }
}