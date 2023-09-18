const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/update", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body);
    }, [2000]);
});

app.listen(8080, () =>{
    console.log('listening on port 8080');
});