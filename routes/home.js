const express = require("express");
const router = express.Router();
const client = require('../services/zendesk');

//get homepage of Ticket Viewer, display tickets and paginate 

router.get("/", (req, res) => {
    client.getTickets(req.query)
        .then(json => {
            res.render("pages/home", {
                tickets: json.tickets,
                meta: json.meta
            })
        })
        .catch((err) => {
            res.render('pages/error', {
                err: err
            })
        })
});

module.exports = router;