import { Router } from "express";
import { createDoctor, deleteDoctor, getDoctorById, getDoctor, updateDoctor } from "../controller/doctor.controller";
const router = Router();

router.get('/', getDoctor)
router.get('/:id', getDoctorById)
router.post('/', createDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

export default router;