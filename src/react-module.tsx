import React from 'react';
import ReactDOM from 'react-dom/client';

import { useWertWidget } from '@wert-io/module-react-component';
import type {
  ReactiveOptions,
  StaticOptions
} from '@wert-io/module-react-component';

/*
  In this example we initialize a simple crypto purchase.
  If you are looking for the full documentation or the smart contract example,
  please refer to https://www.npmjs.com/package/@wert-io/module-react-component
*/

const WertButton: React.FC = () => {
  // Here goes the list of all static options. This object is then passed to the open() method
  const options: StaticOptions = {
    partner_id: 'default',
    origin: 'https://sandbox.wert.io', // this option needed only in sandbox
    commodity: 'ETH',
    network: 'sepolia',
  };
  // The reactive options - listeners and theme-related parameters - are passed to the useWertWidget() hook
  const [reactiveOptions] = React.useState<ReactiveOptions>({
    listeners: {
      loaded: () => console.log('loaded'),
    },
  });

  const { open } = useWertWidget(reactiveOptions);

  return (
    <button
      onClick={() => {
        open(options);
      }}
    >
      Open Wert widget
    </button>
  );
};

// If you have an app fully written in React, you won't need this
const root = ReactDOM.createRoot(document.getElementById('wert-button'));
root.render(<WertButton />);
