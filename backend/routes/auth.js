const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            success:  true,
            message: "successfully logged",
            user: req.user,
            //cookies: req.cookies
        })
    }    
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success:  false,
        message: "Failed"
    })
});

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect(CLIENT_URL);
})

//get a client request
router.get("/google", passport.authenticate("google", {scope: ["profile"]}));

//a callback function
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}));

router.get("/github", passport.authenticate("github", {scope: ["profile"]}));

router.get("/github/callback", passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))


module.exports = router;

