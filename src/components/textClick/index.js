import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

import Text from '../text';
import {styles} from './styles';

const TextClick = props => {
  const {text, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text medium style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

TextClick.prototype = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

TextClick.defaultProps = {
  text: '',
  onPress: () => {},
};

export default TextClick;
