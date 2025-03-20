import { Router } from "express";
import variationsController from "../controllers/variationsController";

const router = Router();

router.get('/', variationsController.getAllVariations);

router.get('/:id', variationsController.getVariationById);

router.post('/', variationsController.addVariation);

router.put('/:id', variationsController.updateVariation);

router.delete('/:id', variationsController.deleteVariation);

export default router;
