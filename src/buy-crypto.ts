import WertWidget from '@wert-io/widget-initializer';
import type { Options } from '@wert-io/widget-initializer/types';
import { v4 as uuidv4 } from 'uuid';

const options: Options = {
  partner_id: 'default',
  click_id: uuidv4(), // unique id of purсhase in your system
  origin: 'https://sandbox.wert.io', // this option needed only in sandbox
  commodity: 'ETH',
  network: 'sepolia',
  commodities: JSON.stringify([
    {
      commodity: 'MATIC',
      network: 'amoy',
    },
    {
      commodity: 'ETH',
      network: 'sepolia',
    },
  ]),
  listeners: {
    loaded: () => console.log('loaded'),
  },
};
const wertWidget = new WertWidget(options);

wertWidget.open();
