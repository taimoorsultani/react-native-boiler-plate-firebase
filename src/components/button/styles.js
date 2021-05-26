import {StyleSheet} from 'react-native';

import {
  padding,
  margin,
  colors,
  borderSize,
  borderRadius,
  DEVICE_WIDTH,
} from '../../config';

export const buttonStyles = StyleSheet.create({
  base: {
    width: DEVICE_WIDTH / 1.3,
    padding: padding.medium,
    margin: margin.small,
    borderColor: colors.buttonRGBA,
    borderWidth: borderSize.small,
    borderRadius: borderRadius.extraLarge,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soild: {
    backgroundColor: colors.button,
  },
  textOutlineStyles: {
    color: colors.buttonRGBA,
  },
  textSolidStyles: {
    color: colors.white,
  },
});
