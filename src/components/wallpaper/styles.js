import {StyleSheet} from 'react-native';

import {padding, colors} from '../../config';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    zIndex: 10,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
    paddingLeft: padding.medium,
  },
  right: {
    alignItems: 'flex-end',
    paddingRight: padding.medium,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  innerView: {
    flex: 1,
    paddingLeft: padding.large,
    paddingRight: padding.large,
  },
});
