interface Window {
  ethereum?: any;
  Buffer?: any;
}
declare module 'web3' {
  class Web3 {
    constructor(provider: any);
    eth: {
      abi: {
        encodeFunctionCall(abiItem: any, params: string[]): string;
      };
    };
  }

  const web3: typeof Web3;
  export = web3;
}

declare const Web3: typeof import('web3');
