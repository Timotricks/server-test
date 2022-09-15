const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(PORT, () => {
	console.log("listening on port " + PORT);
});