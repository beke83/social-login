const GoogleStrategy =  require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "412880371756-ui7ebbbtkdm7t27qh2edggl14q59slv7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "7e319c61d02ecff3b178";
const GITHUB_CLIENT_SECRET = "3c5ac345e5a0e55158a6090904e669f26fc88a58";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

//serialize our user
passport.serializeUser((user,done) => {
    done(null, user);
});

passport.deserializeUser((user,done) => {
    done(null, user);
});
