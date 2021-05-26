import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {size} from '../../sizes/devices';

const Divider = props => {
  const {value} = props;

  return <View style={{marginTop: size(value)}} />;
};

Divider.prototype = {
  value: PropTypes.number,
};

Divider.defaultProps = {
  value: 0,
};

export default Divider;
