import {StyleSheet} from 'react-native';

import {colors, sizes, DEVICE_WIDTH, padding, margin} from '../../config';

export const styles = StyleSheet.create({
  input: {
    fontSize: sizes.h4,
    backgroundColor: colors.transparent,
    width: DEVICE_WIDTH - padding.extraLarge * 2,
  },
  errorMessage: {
    marginTop: margin.small,
    color: colors.error,
  },
});
