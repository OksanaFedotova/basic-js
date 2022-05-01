const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
   return this.chain.length;
  },
  addLink(value) {
   this.chain.push(`( ${value} )~~`);
   return this;
  },
  removeLink(position) {
    let error = new Error ("You can't remove incorrect link!");
    if(typeof position !== 'number') {
      this.chain = [];
      throw error;
    }
    const index = position - 1;
    if(index < 0 || index >= this.chain.length) {
      this.chain = [];
      throw error;
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
   this.chain = this.chain.reverse(); 
   return this;
  },
  finishChain() {
    const newLast = this.chain[this.chain.length-1].replace('~~', '');
    this.chain.pop();
    this.chain.push(newLast);
    const res = this.chain.join('');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};

