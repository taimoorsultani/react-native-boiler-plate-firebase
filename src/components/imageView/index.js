import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';

import {imageStyles} from './styles';

const ImageView = props => {
  const {style, source, resizeMode} = props;
  return (
    <FastImage
      style={[style, imageStyles]}
      source={source}
      resizeMode={resizeMode}
    />
  );
};

ImageView.prototypes = {
  style: Image.propTypes.style,
  source: PropTypes.object,
  resizeMode: PropTypes.string,
};

ImageView.defaultProps = {
  style: {},
  source: {},
  resizeMode: FastImage.resizeMode.contain,
};

export default ImageView;
