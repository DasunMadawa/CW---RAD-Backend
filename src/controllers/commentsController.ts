import { Request, Response } from "express";

export default {
    getAllComments: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    },
    getCommentById: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.params.id);
    },
    addComment: async (req: Request, res: Response): Promise<void> => {
        res.status(201).json(req.body);
    },
    updateComment: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.body);
    },
    deleteComment: async (req: Request, res: Response): Promise<void> => {
        res.status(204).send();
    }
}
