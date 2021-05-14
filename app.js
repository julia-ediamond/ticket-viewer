const express = require("express");
const morgan = require("morgan");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");


const PORT = process.env.PORT || 3007;
const app = express();


app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')));

//routes
const homeRouter = require("./routes/home");
const errorRouter = require("./routes/error");

app.use("/", homeRouter);
app.use("/home", homeRouter);
app.use("/error", errorRouter);



app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});

