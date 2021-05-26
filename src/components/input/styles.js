import {StyleSheet} from 'react-native';

import {
  colors,
  borderRadius,
  borderSize,
  DEVICE_WIDTH,
  padding,
  margin,
  inputHeight,
} from '../../config';

export const styles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.white,
    borderWidth: borderSize.small,
    borderRadius: borderRadius.large,
    marginBottom: margin.large,
    height: inputHeight.large.container,
  },
  input: {
    height: inputHeight.large.input,
    borderRadius: borderRadius.large,
    backgroundColor: colors.lightBlack,
    color: colors.white,
    width: DEVICE_WIDTH - padding.extraLarge * 2,
    paddingLeft: padding.medium,
    paddingRight: padding.medium,
  },
});
