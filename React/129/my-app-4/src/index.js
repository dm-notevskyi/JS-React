import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { styled } from 'styled-components';
import { Button } from './App';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';

// Ми можемо наслідувати імпортований компонент, щоб додати йому індивідуальні стилі:
const BigButton = styled(Button)`
  width: 245px;
  margin: 40px auto;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Можна поміняти тег компоненту за допомогою атрибуту as="a" */}
    <BigButton as="a">Send Report</BigButton>
    <BootstrapTest></BootstrapTest>
  </React.StrictMode>
);
