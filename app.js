const express = require("express");
const morgan = require("morgan");
const path = require("path");
const zendesk = require("node-zendesk");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const fetch = require('node-fetch');
const btoa = require('btoa');
const PORT = process.env.PORT || 3007;
const app = express();


app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(expressLayouts)
app.use('/static', express.static(path.join(__dirname, 'public')));


//routes
const homeRouter = require("./routes/home");
const ticketRouter = require("./routes/ticket");
const errorRouter = require("./routes/error");

app.use("/", homeRouter);
app.use("/ticket", ticketRouter);
app.use("/error", errorRouter);


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});

