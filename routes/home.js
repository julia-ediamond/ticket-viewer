const express = require("express");
const router = express.Router();
const zendesk = require("node-zendesk");

//get homepage of Ticket Viewer

router.get("/", (req, res) => {
    res.render("pages/home")
});




module.exports = router;