const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 function stringToIntList(string)
 {
   var s = new Array();
   for (var i = 0; i < string.length; i++) {
     s[i] = string.charCodeAt(i);
   }
   return s;
 }
 function intsToCharList(integers)
 {
   var ints = new Array();
   for (var i = 0; i < integers.length; i++) {
     ints[i] = String.fromCharCode(integers[i]);
   }
   return ints;
 }
 function encrip(text, key)
 {
   text = stringToIntList(text.value);
   key = stringToIntList(key.value);
  // var table = makeTable();
   var keyChar = 0;
   var message = new Array();
   while(message.length<text.length) {
     for(var i = 0; i < text.length; i++) {
       var row = table[0].indexOf(key[keyChar]);
       var col = table[0].indexOf(text[i]);
       message[message.length] = table[row][col];
       if (keyChar<key.length-1) {
         keyChar++;
       } else {
         keyChar = 0;
       }
     }
   }
   message = intsToCharList(message).join("");
  // cipher.value = message;
 }
 function decrip(text, key, cipher)
 {
   cipher = stringToIntList(cipher.value);
   key = stringToIntList(key.value);
   var table = makeTable();
   var keyChar = 0;
   var message = new Array();
   while (message.length<cipher.length) {
     for (var i = 0; i < cipher.length; i++) {
       var row = table[0].indexOf(key[keyChar]);
       var col = table[row].indexOf(cipher[i]);
       message[message.length] = table[0][col];
       if (keyChar<key.length-1) {
         keyChar++;
       } else {
         keyChar = 0;
       }
     }
   }
   message = intsToCharList(message).join("");
   text.value = message;
 
 }

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.typeMachine = direct;
  }
  encrypt(string, key) {
    let error = new Error ('Incorrect arguments!')
    if(string === undefined || key === undefined) {
      throw error
    }
    // let text = stringToIntList(string);
    // let keyInt = stringToIntList(key);
    // var keyChar = 0;
    // var message = new Array();
    // while(message.length<text.length) {
    //   for(var i = 0; i < text.length; i++) {
    //     var row = table[0].indexOf(keyInt[keyChar]);
    //     var col = table[0].indexOf(text[i]);
    //     message[message.length] = table[row][col];
    //     if (keyChar<keyInt.length-1) {
    //       keyChar++;
    //     } else {
    //       keyChar = 0;
    //     }
    //   }
    // }
    // message = intsToCharList(message).join("");
    // return message;
  }
  decrypt(encryptedMessage, key) {
    let error = new Error ('Incorrect arguments!')
    if(encryptedMessage === undefined || key === undefined) {
      throw error
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
// const directMachine = new VigenereCipheringMachine();
// const res = directMachine.encrypt('attack at dawn!', 'alphonse');
// console.log(res)