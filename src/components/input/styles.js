import {StyleSheet} from 'react-native';

import {colors, sizes, DEVICE_WIDTH, padding, margin} from '../../config';

export const styles = StyleSheet.create({
  input: {
    fontSize: sizes.h4,
    backgroundColor: colors.transparent,
    width: DEVICE_WIDTH - padding.large * 4,
    paddingHorizontal: 0,
  },
  errorMessage: {
    marginTop: margin.small,
    color: colors.error,
  },
});
