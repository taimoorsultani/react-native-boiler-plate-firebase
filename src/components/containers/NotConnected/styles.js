import {StyleSheet} from 'react-native';

import {
  padding,
  margin,
  colors,
  borderSize,
  borderRadius,
  DEVICE_WIDTH,
} from '../../../config';
import {size} from '../../../sizes/devices';

export const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  image: {
    marginTop: margin.extraLarge + margin.medium,
    width: size(64),
    height: size(64),
  },
  textTitle: {
    marginTop: margin.extraLarge + margin.medium,
    textAlign: 'center',
  },
  textSubtitle: {
    marginTop: margin.extraLarge + margin.medium,
    textAlign: 'center',
  },
  button: {
    marginTop: margin.extraLarge + margin.medium,
    width: DEVICE_WIDTH / 2 + size(70),
    borderColor: colors.button,
    borderWidth: borderSize.medium,
    borderRadius: borderRadius.extraLarge,
    padding: padding.small,
    backgroundColor: colors.buttonRGBA10,
  },
  buttonText: {
    color: colors.button,
    textAlign: 'center',
  },
});
