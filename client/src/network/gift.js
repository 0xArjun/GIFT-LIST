import axios from 'axios';
import { Buffer } from 'buffer/';
import MerkelTree from '../utils/MerkleTree';
import niceList from '../utils/niceList.json';
const serverUrl = 'http://localhost:1225';
window.Buffer = window.Buffer || Buffer;
export default async function getResult(name) {
  try {
    const markelTree = new MerkelTree(niceList);
    const index = niceList.findIndex((user) => user === name);
    console.log(index);
    const proof = markelTree.getProof(index);
    console.log(name);
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      person_name: name,
      proof: proof,
    });
    console.log(gift);
    return gift;
  } catch (error) {
    console.log(error);
  }
}
