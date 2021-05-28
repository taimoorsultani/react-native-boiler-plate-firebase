import {StyleSheet} from 'react-native';

import {padding, sizes, colors, margin, DEVICE_WIDTH} from '../../../config';

export const styles = StyleSheet.create({
  phoneNumberRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: DEVICE_WIDTH - padding.large * 4,
  },
  cca2: {
    marginTop: padding.extraLarge - 4,
  },
  input: {
    fontSize: sizes.h4 + 2,
    backgroundColor: colors.transparent,
    paddingHorizontal: 0,
    width: DEVICE_WIDTH - padding.large * 9,
  },
  errorMessage: {
    marginTop: margin.small,
    color: colors.error,
  },
});
