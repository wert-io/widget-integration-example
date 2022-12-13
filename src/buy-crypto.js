import WertWidget from '@wert-io/widget-initializer';
import { v4 as uuidv4 } from 'uuid';

const options = {
  partner_id: 'default',
  click_id: uuidv4(), // unique id of purhase in your system
  currency: 'USD',
  commodity: 'ETH',
  commodities: 'BTC,ETH',
  // currency_amount: 100,
  listeners: {
    loaded: () => console.log('loaded'),
  },
};
const wertWidget = new WertWidget(options);

wertWidget.mount();
