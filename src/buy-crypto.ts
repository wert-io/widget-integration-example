import WertWidget from '@wert-io/widget-initializer';
import { v4 as uuidv4 } from 'uuid';

const options = {
  partner_id: 'default',
  click_id: uuidv4(), // unique id of purhase in your system
  origin: 'https://sandbox.wert.io', // this option needed only in sandbox
  currency: 'USD' as const,
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
  // currency_amount: 100,
  listeners: {
    loaded: () => console.log('loaded'),
  },
};
const wertWidget = new WertWidget(options);

wertWidget.open();
