import { Router } from "express";
import { postGeolocalitzation, getAllGeolocalitzation,getGeolocalitzationById,updateGeolocalitzationById,deleteGeolocalitzationById } from "../controllers/geolocalitzation.controller";

const router = Router();

router.get("/",getAllGeolocalitzation);
router.get("/:id",getGeolocalitzationById);
router.post("/",postGeolocalitzation);
router.put("/:id",updateGeolocalitzationById);
router.delete("/:id",deleteGeolocalitzationById);

export default router;