import { Router } from 'express';
import { createSession, getSessions, getSession, deleteSession } from '../controllers/session.controller';

const router = Router();

router.route('/sessions')
    .get(getSessions)
    .post(createSession);

router.route('/sessions/:id')
    .get(getSession)
    .delete(deleteSession);

export default router;