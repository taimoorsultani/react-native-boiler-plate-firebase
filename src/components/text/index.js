import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';

import {sizes, lineHeights} from '../../config/fonts';

const CustomText = props => {
  const {
    style,
    children,
    medium,
    light,
    bold,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    colorSecondary,
    colorThird,
    primary,
    secondary,
    third,
    textCenter,
    ...rest
  } = props;
  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        StyleSheet.flatten([primary, style]),
        colorSecondary && secondary,
        colorThird && third,
        h1 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h1,
              lineHeight: lineHeights.h1,
            },
            h1Style,
          ]),
        h2 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h2,
              lineHeight: lineHeights.h2,
            },
            h2Style,
          ]),
        h3 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h3,
              lineHeight: lineHeights.h3,
            },
            h3Style,
          ]),
        h4 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h4,
              lineHeight: lineHeights.h4,
            },
            h4Style,
          ]),
        h5 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h5,
              lineHeight: lineHeights.h5,
            },
            h5Style,
          ]),
        h6 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h6,
              lineHeight: lineHeights.h6,
            },
            h6Style,
          ]),
        textCenter && styles.textCenter,
        light && styles.light,
        medium && styles.medium,
        bold && styles.bold,
      ])}
      {...rest}>
      {props.children}
    </Text>
  );
};

CustomText.propTypes = {
  style: Text.propTypes.style,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  bold: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  colorSecondary: PropTypes.bool,
  colorThird: PropTypes.bool,
  h1Style: Text.propTypes.style,
  h2Style: Text.propTypes.style,
  h3Style: Text.propTypes.style,
  h4Style: Text.propTypes.style,
  h5Style: Text.propTypes.style,
  h6Style: Text.propTypes.style,
  primary: Text.propTypes.style,
  secondary: Text.propTypes.style,
  children: PropTypes.node,
  textCenter: PropTypes.bool,
};

CustomText.defaultProps = {
  medium: false,
  light: false,
  bold: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  colorSecondary: false,
  colorThird: false,
  style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  h5Style: {},
  h6Style: {},
  children: '',
  textCenter: false,
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.base,
    textAlign: 'left',
  },
  light: {},
  medium: {},
  bold: {},
  textCenter: {
    textAlign: 'center',
  },
});

export default CustomText;
