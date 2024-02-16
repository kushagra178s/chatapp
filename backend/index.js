const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());

app.use(cors());

app.post("/authenticate", async function (req, res) {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": process.env.privatekey} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response).json(e.response);
  }
//   return res.json({ username: username, secret: "sha256.." });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("server started on port : ", PORT);
}); 