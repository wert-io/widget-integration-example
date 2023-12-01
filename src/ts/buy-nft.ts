/* eslint-disable no-undef */
import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer/';

type WindowType = Window &
  typeof globalThis & {
    Buffer: any;
    ethereum: any;
  };

(window as WindowType).Buffer = Buffer; // needed to use `signSmartContractData` in browser

/* We advise you not to use the private key on the frontend
    It is used only as an example
*/

if ((window as any).ethereum) {
  (async () => {
    // Get user address

    const userAccounts = await (window as WindowType).ethereum.request({
      method: 'eth_requestAccounts',
    });

    //@ts-ignore
    const web3: any = new Web3((window as WindowType).ethereum);
    const userAddress = userAccounts[0];
    // Encode the call to mintNFT(address = userAddress, numberOfTokens = 1)
    const sc_input_data = web3.eth.abi.encodeFunctionCall(
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'numberOfTokens',
            type: 'uint256',
          },
        ],
        name: 'mintNFT',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      [userAddress, 1]
    );
    const privateKey =
      '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';
    // Create signed SC data for wert-widget
    // Please do this on backend
    const signedData = signSmartContractData(
      {
        address: userAddress, // user's address
        commodity: 'MATIC',
        commodity_amount: 3, // the crypto amount that should be sent to the contract method
        network: 'mumbai',
        sc_address: '0x6af35a72b2490a44c0e88ae635b9b38516544db1', // your SC address
        sc_input_data,
      },
      privateKey
    );
    const otherWidgetOptions = {
      partner_id: '01GCRJZ1P7GP32304PZCS6RSPD', // your partner id
      click_id: uuidv4(), // unique id of purhase in your system
      origin: 'https://sandbox.wert.io', // this option needed only in sandbox
    };
    const nftOptions = {
      extra: {
        item_info: {
          author: 'Wert',
          image_url: 'http://localhost:8765/sample_nft.png',
          name: 'Wert Sample NFT',
          seller: 'Wert',
        },
      },
    };

    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
      ...nftOptions,
    });

    wertWidget.open();
  })();
}
