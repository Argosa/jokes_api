const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const AllMyJokeRoutes = require("./server/routes/routes");
AllMyJokeRoutes(app);

app.listen(8000, () => {
    console.log("Server is locked and loaded");
});
