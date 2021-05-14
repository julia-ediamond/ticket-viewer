const express = require("express");
const router = express.Router();
const {
    zendeskAuthHeaderValue,
    zendeskApiUrl
} = require('../client-config');
const fetch = require('node-fetch');

//get homepage of Ticket Viewer, display tickets and paginate 

router.get("/", (req, res) => {

    var getTicketsZendeskUrl = zendeskApiUrl + '/tickets' + '?page[size]=25'
    if (req.query.aftercursor) {
        getTicketsZendeskUrl += '&page[after]=' + req.query.aftercursor
    } else if (req.query.beforecursor) {
        getTicketsZendeskUrl += '&page[before]=' + req.query.beforecursor
    }
    fetch(getTicketsZendeskUrl,
        {
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
                    })
                    res.render("pages/home", {
                        tickets: json.tickets,
                        meta: json.meta
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