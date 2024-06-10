import WertWidget from '@wert-io/widget-initializer';
import type { Options } from '@wert-io/widget-initializer/types';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer/';

window.Buffer = Buffer; // needed to use `signSmartContractData` in browser

/* We advise you not to use the private key on the frontend
    It is used here for example only
*/
const privateKey =
  '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';
const signedData = signSmartContractData(
  {
    address: '0x96D5990185022212d367A0e09263B12Dbb4EE06A',
    commodity: 'ETH',
    network: 'sepolia',
    commodity_amount: 0.005,
    sc_address: '0x56bB50a9912B04A5Ff260950F98A9dc023906f94',
    sc_input_data:
      '0x9dae76ea000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  },
  privateKey
);
const otherWidgetOptions: Options = {
  partner_id: '01GCRJZ1P7GP32304PZCS6RSPD',
  click_id: uuidv4(), // unique id of purhase in your system
  origin: 'https://sandbox.wert.io', // this option needed only for this example to work
  listeners: {
    loaded: () => console.log('loaded'),
  },
};

const wertWidget = new WertWidget({
  ...signedData,
  ...otherWidgetOptions,
});

wertWidget.open();
