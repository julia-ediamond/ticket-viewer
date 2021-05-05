const express = require("express");
const router = express.Router();
const zendesk = require("node-zendesk");

//Get page for an error
router.get("/error", (req, res) => {
    res.render("pages/error")
});


module.exports = router;