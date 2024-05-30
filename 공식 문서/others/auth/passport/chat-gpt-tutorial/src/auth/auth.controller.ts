import { Router } from 'express';
import { loginTemplate, registerTemplate } from './auth.template';
import { login, register } from './auth.service';

const router = Router();

router.post('/register', register);

router.post('/login', login);

router.get('/register', (_, res) => {
  res.send(registerTemplate);
});

router.get('/login', (_, res) => {
  res.send(loginTemplate);
});

export { router as authRouter };
