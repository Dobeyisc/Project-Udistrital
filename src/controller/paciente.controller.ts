import { RequestHandler } from 'express'
import { Paciente } from '../models/paciente.model'

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getPacientes: RequestHandler = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll()

      res.status(200).json({
        message: 'Operación exitosa ✔️',
        data: pacientes
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener los pacientes ',
      error: err.message
    })
  }
}

export const getPacienteById: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente) {
      res.status(200).json({
        message: 'Paciente encontrado por ID 👍',
        data: paciente
      })
    } else {
      res.status(404).json({
        message: 'Paciente no encontrado ❌'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener los pacientes status:(500) ❌',
      error: error.message
    })
  }
}

export const createPaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body)

    res.status(201).json({
      message: 'Paciente creado! ✔️',
      data: paciente
    })
  } catch (error:any) {
    res.status(500).json({
      message: 'No se pudo crear el paciente ❌'
    })
  }
}

export const updatePaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente){
      await Paciente.update(req.body, {
        where: {
          id_numeroCedula: req.params.id
        }
      })
      res.status(200).json({
        message: 'Paciente actualizado ✔️'
      })
    } else {
      res.status(404).json({
        message: 'Paciente no existe ❌'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Paciente modificado ✔️',
      error: error.message
    })
  }
}

export const deletePaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente){
      await Paciente.destroy({
        where: {
          id_numeroCedula: req.params.id
        }
      })
      res.status(200).json({
        message: 'Paciente eliminado ☠️'
      })
    } else {
      res.status(404).json({
        message: 'Paciente no existe ❌'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Paciente modificado ✔️  ',
      error: error.message
    })
  }
}