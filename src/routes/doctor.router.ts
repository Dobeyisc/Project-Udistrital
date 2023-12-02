import { Router } from "express";
import { createDoctor, deleteDoctor, getDoctoresById, getDoctores, updateDoctor } from "../controller/doctor.controller";
const router = Router();

router.get('/', getDoctores)
router.get('/:id', getDoctoresById)
router.post('/', createDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

export default router;