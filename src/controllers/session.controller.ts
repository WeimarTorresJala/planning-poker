import { json, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import session from '../models/session';

export async function getSessions(req: Request, res: Response): Promise<Response> {
    const sessions = await session.find();
    
    return res.json(sessions);
}

export async function getSession(req: Request, res: Response): Promise<Response> {
    const sessionFound = await session.findById(req.params.id);

    return res.json(sessionFound);
}

export async function createSession(req: Request, res: Response): Promise<Response> {
    const { name, type, questions, owner } = req.body;

    const newSession = new session({
        name: name,
        typeId: 1,
        questionsId: [
            uuidv4(),
            uuidv4()
        ],
        ownerId: uuidv4()
    });

    const sessionResp = await newSession.save();

    return res.json({
        message: 'Session successfully created',
        sessionResp
    });
}

// export async function updateSession(req: Request, res: Response): Promise<Response> {
//     const { name, type } = req.body;

//     const updatedSession = await session.findByIdAndUpdate(req.params.id, {
//         name: name,
//         typeId: type
//     }, {new: true});

//     return res.json({
//         message: "Successfully updated",
//         updatedSession
//     });
// }

export async function deleteSession(req: Request, res: Response): Promise<Response> {
    const deletedSession = await session.findByIdAndRemove(req.params.id);

    return res.json({
        message: "Session deleted",
        deletedSession
    });
}