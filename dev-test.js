const Blochain = require ('./blockchain');

const bc = new Blochain ();

for (let i=0; i<10; i++) {
  console.log (bc.addBlock(`foo, ${i}`).toString());
}