import { Router } from 'express';
import { createSession, getSessions, getSession, deleteSession } from '../controllers/session.controller';
import { createType, getType, getTypes } from '../controllers/types.controller';

const router = Router();

router.route('/sessions')
    .get(getSessions)
    .post(createSession);

router.route('/sessions/:id')
    .get(getSession)
    .delete(deleteSession);

router.route('/types')
    .get(getTypes)
    .post(createType);

router.route('/types/:id')
    .get(getType)

export default router;