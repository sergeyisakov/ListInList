import React from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

function App() {
  return <div className="foo" styleName="app-root">Hello!</div>;
}

export default cssModules(App, styles);
