import { Request, Response } from "express";

export default {
    getAllMobilePhones: async (req: Request, res: Response):Promise<void> => {
        res.status(200).json([]);
    },
    getMobilePhoneById: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.params.id);
    },
    addMobilePhone: async (req: Request, res: Response): Promise<void> => {
        res.status(201).json(req.body);
    },
    updateMobilePhone: async (req: Request, res: Response): Promise<void> => {
        res.status(200).json(req.body);
    },
    deleteMobilePhone: async (req: Request, res: Response): Promise<void> => {
        res.status(204).send();
    }

}
