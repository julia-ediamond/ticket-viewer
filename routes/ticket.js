const express = require("express");
const router = express.Router();
const zendesk = require("node-zendesk");

//Get page for an individual ticket
router.get("/ticket", (req, res) => {
    res.render("pages/ticket")
});


module.exports = router;