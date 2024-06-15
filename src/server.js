const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "dist");
console.log(path.join(publicPath, "index.html"));
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
	console.log(`Frontend running on port ${port}`);
});
