import { Router } from 'express';
import { createQuestion, deleteQuetion, getQuestions, updateQuestion } from '../controllers/question.controller';
import { createSession, getSessions, getSession, deleteSession } from '../controllers/session.controller';
import { createType, getType, getTypes } from '../controllers/type.controller';

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

router.route('/sessions/:id/questions')
    .get(getQuestions)
    .post(createQuestion)

router.route('/questions/:id')
    .put(updateQuestion)
    .delete(deleteQuetion)

export default router;