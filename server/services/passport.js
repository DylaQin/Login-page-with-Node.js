const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        scope: ['profile', 'email'] // Specify the desired scopes here
      },
      (accessToken, refreshToken, profile, done) => {
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile:', profile);
        new User({ googleID:profile.id }).save();
      }
    )
  );