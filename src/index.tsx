import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import './i18n';

render(
  <div>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </div>,
  document.getElementById('root')
);
