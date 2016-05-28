import React from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import ControlPanel from 'components/ControlPanel';

function App() {
  return (
    <div>
      <ControlPanel />
    </div>
  );
}

export default cssModules(App, styles);
