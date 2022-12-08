import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../errors/index.js';
import dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV, JWT_SECRET } = process.env;

const unauthorizedError = new UnauthorizedError('Ошибка авторизации');

export default function auth(req, res, next) {
  const { authorization } = req.headers;
  // || !authorization.startsWith('Bearer ')
  if (!authorization) {
    next(unauthorizedError);
  }

  const token = authorization.replace(/Bearer*\s*/i,'');
  let payload;

  try {
    // payload = jwt.verify(token, 'some-secret-key');
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  } catch (err) {
    next(unauthorizedError);
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
  return '';
}
