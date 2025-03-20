import { Request, Response } from "express"

export default {
    getAllStars: async (req: Request, res: Response):Promise<void> => {
        res.status(200).json([]);
    },
    getStarById: async (req: Request, res: Response):Promise<void> => {
        res.status(200).json(req.params.id);
    },
    addStar: async (req: Request, res: Response): Promise<void> => {
        res.status(201).json(req.body);
    },
    updateStar: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.body);
    },
    deleteStar: async (req: Request, res: Response): Promise<void> => {
        res.status(204).send();
    }
    
}
