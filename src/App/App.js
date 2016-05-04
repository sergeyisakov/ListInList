import React from 'react';
import cssModules from 'react-css-modules';
import styles from './App.css';

const App = () => <div className="foo" styleName="app-root">Hello!</div>;

export default cssModules(App, styles);
