import {StyleSheet} from 'react-native';

import {padding} from '../../../config';

export const authHomeStyles = StyleSheet.create({
  darkModeContainer: {
    paddingTop: padding.large,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: padding.extraLarge + padding.small,
  },
  switchContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: padding.extraLarge + padding.small,
  },
});
