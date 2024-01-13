/**
 * Todo API
 *
 * @package src/article
 * @route GET /api/articles
 * @route GET /api/article/:id
 * @route POST /api/article
 * @route PUT /api/article/:id
 * @route DELETE /api/article/:id
 */
import * as express from 'express';
import { findAll, findOne, create, update, remove } from './article.controller';
import { authGuard } from '../lib/guards/jwt-auth.guard';

const router = express.Router();

// ルートを定義する
router.get('/article', authGuard, findAll);
router.get('/article/:id', authGuard, findOne);
router.post('/article', authGuard, create);
router.put('/article/:id', authGuard, update);
router.delete('/article/:id', authGuard, remove);

export default router;
