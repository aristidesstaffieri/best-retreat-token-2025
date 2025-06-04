const fs = require("fs")
const { createHash } = require('crypto');

const contractWasm = fs.readFileSync('./target/wasm32-unknown-unknown/release/soroban_token_contract.wasm');
console.log(contractWasm.toString("base64"))
console.log(createHash('sha256').update(contractWasm).digest('hex'))