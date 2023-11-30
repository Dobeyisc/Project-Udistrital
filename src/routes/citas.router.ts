import { Router } from "express";
import { createCita, deleteCita, getCita, getOneCita, updateCita } from "../controller/citas.controller";

const router = Router();

router.get('/', getCita)
router.get('/one-cita', getOneCita)
router.post('/', createCita)
router.put('/', updateCita)
router.delete('/', deleteCita)

export default router;