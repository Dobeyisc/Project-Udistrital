import { Router } from "express";
import { createPaciente, deletePaciente, getPacientes, getPacientesById, updatePaciente } from "../controller/paciente.controller";

const router = Router();

router.get('/', getPacientes)
router.get('/:id', getPacientesById)
router.post('/', createPaciente)
router.put('/:id', updatePaciente)
router.delete('/:id', deletePaciente)

export default router;