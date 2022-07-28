const GoogleStrategy =  require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "provide_your_client_id";
const GOOGLE_CLIENT_SECRET = "provide_your_secret_key";

const GITHUB_CLIENT_ID = "provide_your_client_id";
const GITHUB_CLIENT_SECRET = "provide_your_secret_key";

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
