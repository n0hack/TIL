const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const db = require('../db');
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
      if (err) {
        return cb(err);
      }
      if (!row) {
        return cb(null, false, { message: '회원명 또는 비밀번호가 일치하지 않습니다.' });
      }
      const canLogin = await bcrypt.compare(password, row.hashed_password);

      if (canLogin) {
        return cb(null, row);
      } else {
        return cb(null, false, { message: '회원명 또는 비밀번호가 일치하지 않습니다.' });
      }
    });
  }),
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post(
  '/login/password',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', async (req, res, next) => {
  const salt = 12;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  db.run(
    'INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)',
    [req.body.username, hashedPassword, salt],
    (err) => {
      if (err) {
        return next(err);
      }
      const user = {
        id: this.lastID,
        username: req.body.username,
      };
      req.login(user, (err) => {
        if (err) return next(err);
        res.redirect('/');
      });
    },
  );
});

module.exports = router;
