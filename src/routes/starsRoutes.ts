import { Router } from "express";
import starsController from "../controllers/starsController";

const router = Router();

router.get("/", starsController.getAllStars);

router.get("/:id", starsController.getStarById);

router.post("/", starsController.addStar);

router.put("/:id", starsController.updateStar);

router.delete("/:id", starsController.deleteStar);
