require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn prosper grace hero flower tennis'; 
let testAccounts = [
"0x45f15fdef2d8173d4e72289f7f27571ac01d998d4ffce476087223647b15220f",
"0x1fe0d695107b00f6e171ee23fbee1883b6cc804683ede963529a76eab12a3942",
"0xf2f6c4011862a70c78b1e2ea1009209092dccd5d1e9a40fd998a92566e2ec47e",
"0x31d28dc2a1d9ebfb7a25e6eedbbf73e304479773a9d95682505bd4b25c6aecfa",
"0x34c282c97993f380f4e862b53b98d8fcf0fbd78b76e1dc33f21872b44c23ab70",
"0x3f948235f3d1f56f7679cdd9ac750fa6e86315ed6202767b4920a0bebcc8bbc4",
"0xec2a82e3be941475c553b176e75cfd19f2fe8436fbd21dead19c758256b12497",
"0x2ed09f1e6ee7be025be896527b7f65f15877190b3fdb172e56b1c2c67d9e2367",
"0x0b9549ae404ef3df9a68dbc92807c8a2fafdc953c3bd987ab21425f39f2831dd",
"0xfe5d701d5ed273146cdaeb04f04e13c9574c329b7f221dddd7b834b041a23042"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

