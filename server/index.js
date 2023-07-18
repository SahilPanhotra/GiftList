const express = require("express");
const verifyProof = require("./verifyProof");
const cors = require("cors");

const port = 1225;

const app = express();
app.use(express.json());
app.use(cors());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
//we get this merkleroot from getRoot shown in example.js
const MERKLE_ROOT =
  "ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa";

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here
  const { name, proof } = req.body;

  // TODO: prove that a name is in the list
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.status(400).send("You are not on the winner list");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
