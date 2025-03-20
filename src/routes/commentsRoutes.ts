import { Router } from "express";
import commentsController from "../controllers/commentsController";

const router = Router();

router.get('/', commentsController.getAllComments);

router.get('/:id', commentsController.getCommentById);

router.post('/', commentsController.addComment);

router.put('/:id', commentsController.updateComment);

router.delete('/:id', commentsController.deleteComment);


export default router;

