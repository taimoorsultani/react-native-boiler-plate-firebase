import {StyleSheet} from 'react-native';

import {padding, sizes, colors, margin, DEVICE_WIDTH} from '../../../config';

export const styles = StyleSheet.create({
  phoneNumberRow: {
    alignItems: 'center',
  },
  cca2: {
    marginTop: padding.extraLarge,
  },
  input: {
    fontSize: sizes.h4,
    backgroundColor: colors.transparent,
    width: DEVICE_WIDTH - padding.extraLarge * 4,
  },
  errorMessage: {
    marginTop: margin.small,
    color: colors.error,
  },
});
