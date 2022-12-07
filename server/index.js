const express = require('express');
const MerkleTree = require('../utils/MerkleTree');
const verifyProof = require('../utils/verifyProof');
const cors = require('cors');
const port = 1225;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
// get the root
// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT =
  'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const { person_name, proof } = req.body;
  console.log(req.body);
  const isInTheList = verifyProof(proof, person_name, MERKLE_ROOT);
  if (isInTheList) {
    res.send({ message: 'You got a toy robot!', isWinner: true });
  } else {
    res.send({ message: 'You are not on the list :( ', isWinner: false });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
