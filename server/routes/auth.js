const express = require('express');
const { add, get } = require('../data/user');
const { createJSONToken, isValidPassword } = require('../util/auth');
const { isValidEmail, isValidText, isEqualValues } = require('../util/validation');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res, next) => {
  const data = req.body;
  let errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email.';
  } else {
    try {
      const existingUser = await get(data.email);
      if (existingUser) {
        errors.email = 'Email exists already.';
      }
    } catch (error) {}
  }

  if (!isValidText(data.password, 6)) {
    errors.password = 'Invalid password. Must be at least 6 characters long.';
  }

  if (!isEqualValues(data.password, data.repeat_password)) {
    errors.password = 'Passwords do not match.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'User signup failed due to validation errors.',
      errors,
    });
  }

  try {
    const createdUser = await add({email: data.email, password: data.password});
    const authToken = createJSONToken(createdUser.email);
    res
      .status(201)
      .json({ message: 'User created.', user: createdUser, token: authToken });
  } catch (error) {
    next(error);
  }
});

authRouter.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let user;
  try {
    user = await get(email);
    if (!user) {
      return res.status(422).json({
        message: 'Invalid email.',
        errors: { email: 'User with such email does not exist.' },
      });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed.' });
  }

  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: 'Invalid credentials.',
      errors: { password: 'Invalid password entered.' },
    });
  }

  const token = createJSONToken(email);
  res.json({ token });
});

module.exports = authRouter;
