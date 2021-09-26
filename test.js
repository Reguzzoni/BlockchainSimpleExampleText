//const Blockchain = require('./blockhain.js');
import Blockchain from './blockchain.js'

const bitcoin = new Blockchain();

bitcoin.createNewBlock(
    '12345',
    'ghgjsgsjsgajasdjdgdj',
    'jsjkwjuwjsisjwsks'
);

console.log(bitcoin);