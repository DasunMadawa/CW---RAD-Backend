import { Router } from "express";
import mobilePhonesController from "../controllers/mobilePhonesController";

const router = Router();

router.get('/', mobilePhonesController.getAllMobilePhones);

router.get('/:id', mobilePhonesController.getMobilePhoneById);

router.post('/', mobilePhonesController.addMobilePhone);

router.put('/:id', mobilePhonesController.updateMobilePhone);

router.delete('/:id', mobilePhonesController.deleteMobilePhone);

export default router;
