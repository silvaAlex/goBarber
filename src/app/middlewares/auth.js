import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import configAuth from '../../config/auth';

export default async (req, res, next) => {
  const headerAuth = req.header.authorization;
  if (!headerAuth) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  const [, token] = headerAuth.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, configAuth.secrets);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
