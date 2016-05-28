import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

function ControlPanel() {
  return (
    <div styleName="control-panel">
      <div styleName="title">San Francisco Driver Form</div>
      <div styleName="tabs"></div>
    </div>
  );
}

ControlPanel.propTypes = {

};

export default cssModules(ControlPanel, styles);
