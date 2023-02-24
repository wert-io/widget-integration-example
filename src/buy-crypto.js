import WertWidget from '@wert-io/widget-initializer';
import { v4 as uuidv4 } from 'uuid';

const options = {
  partner_id: 'default',
  container_id: 'widget',
  click_id: uuidv4(), // unique id of purhase in your system
  width: 400,
  height: 600,
  currency: 'USD',
  commodity: 'ETH',
  network: 'goerli',
  commodities: JSON.stringify([
    {
      commodity: "BTC",
      network: "testnet",
    },
    {
      commodity: "ETH",
      network: "goerli",
    },
  ]),
  // currency_amount: 100,
  listeners: {
    loaded: () => console.log('loaded'),
  },
};
const wertWidget = new WertWidget(options);

wertWidget.mount();
