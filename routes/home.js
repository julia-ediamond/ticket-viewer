const express = require("express");
const router = express.Router();
const {
    zendeskAuthHeaderValue,
    zendeskApiUrl
} = require('../client-config');
const fetch = require('node-fetch');
const base64 = require('base-64');

//get homepage of Ticket Viewer

router.get("/", (req, res) => {

    fetch(zendeskApiUrl + '/tickets', {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Authorization': zendeskAuthHeaderValue
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(json => {
                json.tickets.forEach(ticket => {
                    console.log(ticket.id)
                });
                res.render("pages/home", {
                    tickets: json.tickets,
                })
            });
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    })
        .catch((err) => {
            res.render('pages/error', {
                err: err
            })
        })
});




module.exports = router;