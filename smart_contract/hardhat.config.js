// https://eth-ropsten.alchemyapi.io/v2/AWbPdk1PM546t3MsuxRl8q5KOo-WKlJ1

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AWbPdk1PM546t3MsuxRl8q5KOo-WKlJ1',
      accounts: [ 'ecb8c9c2b01d53ff38faef5fdcc350fe639f10f26a8d36c1392601069896d21a' ]
    }
  }
}