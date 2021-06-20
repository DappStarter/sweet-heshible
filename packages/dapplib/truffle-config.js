require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe story crawl soap artwork give glimpse equal gather'; 
let testAccounts = [
"0xb27bb94ca390b2004ac8d82ae127d52bccd84166adfbd98267bf60dc54a8fdda",
"0xf49740f8162ad3aa4b703e740142f4f39e52b967d006c34cc1b550e7ae09eff0",
"0x598e5938dcb1b8f8e4035b073a8ed8e8e4d463f08ddc2648b97d8fd7b8cccc62",
"0x7a826f9d8b1c0633e5bdb4ebc74b6c1795cfc6528b0f0f372acccba36e90d8c9",
"0x4bac98262d317473e91cae560152b72e76d82256f2bcd82b17ee6892d8f8d3dd",
"0xb090a039de22ae8f9bb2b78a1a127709f69e0e553445fc23973f202ffdf2e418",
"0x910c3630e394a9ddd6e22ec464da6edcaefd6210fd1e6d25572d062e802a251e",
"0x44513ee7e0b38e4b535ee9c9fdd1cf14fca9f241f2f5c65d6d7f9572a61965d1",
"0x46d6d5e4af5d88feaab6ec65864e94033ae1646744a619c3813e1cd1ca38c0d8",
"0x9a9aa4f7aa2fa4be6856ddf441d29448a09a72a1a3962132e3f330a9faa6ec85"
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

