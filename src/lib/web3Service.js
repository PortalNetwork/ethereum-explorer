export const getEthereumProvider = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io';
    default:
      return 'http://localhost:8545/';
  }
}

export const getEthereumRegistrarAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef';
    case '3':
      return '0x0';
    default:
      return '0x0';
  }
}

export const getEthereumRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0x314159265dD8dbb310642f98f50C066173C1259b';
    case '3':
      return '0x0';
    default:
      return '0x0';
  }
}
