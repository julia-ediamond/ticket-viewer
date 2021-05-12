const express = require("express");
const router = express.Router();
const clientConfig = require('../client-config');
const fetch = require('node-fetch');
const base64 = require('base-64');

//get homepage of Ticket Viewer

router.get("/", (req, res) => {

    fetch('https://ediamondhelp.zendesk.com/api/v2/tickets', {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic aXVzaGFybmluYUBnbWFpbC5jb20vdG9rZW46eG42UjZId1FUTzhXb1lrR0ZodUEya3pLUkVSTnpVaWVLVktRNGwzaw=="
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(json => {
                console.log(json);
                console.log(response.body),
                    res.render("pages/home", {
                        response: response,
                    })
            });
            return response

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