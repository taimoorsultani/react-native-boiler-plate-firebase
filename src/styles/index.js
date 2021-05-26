import {StyleSheet} from 'react-native';

import {colors} from '../config';

export const mainStyles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  contentCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
