import WertWidget from '@wert-io/widget-initializer';
import type { Options } from '@wert-io/widget-initializer/types';
import { v4 as uuidv4 } from 'uuid';

const options: Options = {
  partner_id: 'default',
  click_id: uuidv4(), // unique id of purсhase in your system
  origin: 'https://sandbox.wert.io', // this option needed only in sandbox
  currency: 'USD',
  commodity: 'ETH',
  network: 'goerli',
  commodities: JSON.stringify([
    {
      commodity: 'BTC',
      network: 'testnet',
    },
    {
      commodity: 'ETH',
      network: 'goerli',
    },
  ]),
  listeners: {
    loaded: () => console.log('loaded'),
  },
};
const wertWidget = new WertWidget(options);

wertWidget.open();
