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
  disabled: {
    borderColor: colors.gray,
    backgroundColor: colors.gray,
  },
  soild: {
    backgroundColor: colors.button,
    borderColor: colors.buttonRGBA,
  },
  textOutlineStyles: {
    color: colors.buttonRGBA,
  },
  textSolidStyles: {
    color: colors.white,
  },
});
