import { Request, Response } from "express";

export default {
    getAllVariations: async(req: Request, res: Response):Promise<void> => {
        res.status(200).json([]);
    },
    getVariationById: async(req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.params.id);
    },
    addVariation: async(req: Request, res: Response): Promise<void> => {
        res.status(201).json(req.body);
    },
    updateVariation: async(req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.body);
    },
    deleteVariation: async(req: Request, res: Response): Promise<void> => {
        res.status(204).send();
    }
        
}