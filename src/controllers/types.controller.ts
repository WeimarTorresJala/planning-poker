import { Request, Response } from 'express';
import type from '../models/type';

export async function getTypes(req: Request, res: Response): Promise<Response> {
    const types = await type.find();
    
    return res.json(types);
}

export async function getType(req: Request, res: Response): Promise<Response> {
    const typeFound = await type.findById(req.params.id);

    return res.json(typeFound);
}

export async function createType(req: Request, res: Response): Promise<Response> {
    const { numbers } = req.body;

    const newType = new type({
        numbers: numbers,
    });

    const typeResp = await newType.save();

    return res.json({
        message: 'Type successfully created',
        typeResp
    });
}