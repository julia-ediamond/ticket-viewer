const {
    zendeskAuthHeaderValue,
    zendeskApiUrl
} = require('../client-config');
const fetch = require('node-fetch');
const express = require("express");

let zendesk = {
    getTickets: function (queryParams) {
        return fetch(getTicketsZendeskUrl(queryParams),
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': zendeskAuthHeaderValue
                }
            }).then(function (response) {
                if (response.ok) {
                    return response.json()
                }
                else {
                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            })
    }
}

function getTicketsZendeskUrl(queryParams) {
    let ticketsZendeskUrl = zendeskApiUrl + '/tickets' + '?page[size]=25';
    if (queryParams.aftercursor) {
        ticketsZendeskUrl += '&page[after]=' + queryParams.aftercursor
    } else if (queryParams.beforecursor) {
        ticketsZendeskUrl += '&page[before]=' + queryParams.beforecursor
    }
    return ticketsZendeskUrl;
}

module.exports = zendesk;