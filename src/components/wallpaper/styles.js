import {StyleSheet} from 'react-native';

import {padding} from '../../config';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
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
