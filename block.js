const SHA256 = require('crypto-js/sha256');
class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash  = hash;
    this.data = data;
  }

  toString() {
    return `Block - 
     Timstamp: ${this.timestamp}
     Last Hash: ${this.lastHash.substring (0, 10)}
     Hash     : ${this.hash.substring(0, 10)}
     Data     : ${this.data}`;
  }
  static genesis() {
    return new this('01.07.2018', '---', 'ftw34-c9kw', [])
  }
  static mineBlock(lastBlock, data){
    const timestamp = Date.now()
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);

    return new this(timestamp, lastHash, hash, data);
  }

  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }
}

module.exports = Block;