const express = require("express");
const router = express.Router();


//Get error page
router.get("/", (req, res) => {
    res.status(404).render('pages/error', {
        err: {
            message: 'This page does not exist'
        }
    })

});


module.exports = router;