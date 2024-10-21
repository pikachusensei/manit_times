const express = require("express");
const path = require("path"); // Required to resolve the correct path
const app = express();

// Serve static files from the public folder
app.use(express.static("public"));

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
