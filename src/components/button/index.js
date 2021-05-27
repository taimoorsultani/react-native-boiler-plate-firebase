import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

import Text from '../text';
import {buttonStyles} from './styles';

const Button = props => {
  const {style, label, onPress, outline, loading} = props;
  return (
    <TouchableOpacity
      disabled={loading}
      style={[
        style && style,
        buttonStyles.base,
        !outline && buttonStyles.soild,
      ]}
      onPress={onPress}
      activeOpacity={1}>
      <Text
        medium
        style={
          outline
            ? buttonStyles.textOutlineStyles
            : buttonStyles.textSolidStyles
        }>
        {loading ? 'Loading...' : label}
      </Text>
    </TouchableOpacity>
  );
};

Button.prototype = {
  style: PropTypes.style,
  label: PropTypes.string,
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  label: '',
  onPress: () => {},
  outline: false,
  loading: false,
};

export default Button;
