import { Request, Response } from "express";

export default {
    getAllOrders: async(req:Request , res:Response):Promise<void> => {
        res.status(200).json([]);
    },
    getOrderById: async(req:Request, res:Response):Promise<void> => {
        res.status(200).json(req.params.id);
    },
    createOrder: async(req:Request, res:Response):Promise<void> => {
        res.status(201).json(req.body);
    },
    updateOrder: async(req:Request, res:Response):Promise<void> => {
        res.status(200).json(req.body);
    },
    deleteOrder: async(req:Request, res:Response):Promise<void> => {
        res.status(204).send();
    }
    
}