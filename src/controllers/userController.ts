import { Request, Response } from "express";

export default {
    getAllUsers : async (req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    },
    getUserById : async (req: Request, res: Response): Promise<void> => {
        res.status(200).json({});
    },
    createUser : async (req: Request, res: Response): Promise<void> => {
        res.status(201).json({});
    },
    updateUser : async (req: Request, res: Response): Promise<void> => {
        res.status(200).json({});
    },
    deleteUser : async (req: Request, res: Response): Promise<void> => {
        res.status(200).json({});
    }
    
}