import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {withTheme} from 'react-native-paper';

import Text from '../text';
import {mainStyles} from '../../styles';
import {styles} from './styles';
import {iconSize, colors} from '../../config';

const DarkWallpaper = props => {
  const {
    isBack,
    onBackPress,
    isRight,
    onRightPress,
    rightButtonText,
    isHeader,
    headerLabel,
    theme,
    children,
  } = props;

  const keyboardProps = Platform.select({
    android: {
      enabled: true,
      keyboardVerticalOffset: 0,
    },
    ios: {
      enabled: true,
      keyboardVerticalOffset: 64,
      behavior: 'padding',
    },
  });

  const renderLeft = () => {
    return isBack ? (
      <TouchableOpacity
        onPress={onBackPress}
        style={[styles.option, styles.left]}>
        <Entypo
          name="chevron-left"
          size={iconSize.xxLarge}
          color={colors.white}
        />
      </TouchableOpacity>
    ) : (
      <View style={styles.option} />
    );
  };

  const renderTitle = () => {
    return isHeader ? (
      <View style={styles.titleContainer}>
        <Text h2 medium textCenter style={mainStyles.textWhite}>
          {headerLabel}
        </Text>
      </View>
    ) : (
      <View style={styles.titleContainer} />
    );
  };

  const renderRight = () => {
    return isRight ? (
      <TouchableOpacity
        onPress={onRightPress}
        style={[styles.option, styles.right]}>
        <Text medium textCenter style={mainStyles.textWhite}>
          {rightButtonText}
        </Text>
      </TouchableOpacity>
    ) : (
      <View style={styles.option} />
    );
  };

  return (
    <View
      style={[mainStyles.mainView, {backgroundColor: theme.colors.background}]}>
      <SafeAreaView style={mainStyles.safeAreaView}>
        <View style={styles.header}>
          {renderLeft()}
          {renderTitle()}
          {renderRight()}
        </View>
        <KeyboardAvoidingView {...keyboardProps} style={mainStyles.mainView}>
          <View style={styles.innerView}>{children}</View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

DarkWallpaper.prototypes = {
  isBack: PropTypes.bool,
  onBackPress: PropTypes.func,
  isRight: PropTypes.bool,
  onRightPress: PropTypes.func,
  rightButtonText: PropTypes.string,
  isHeader: PropTypes.bool,
  headerLabel: PropTypes.string,
};

DarkWallpaper.defaultProps = {
  isBack: false,
  onBackPress: () => {},
  isRight: false,
  onRightPress: () => {},
  rightButtonText: 'Done',
  isHeader: false,
  headerLabel: '',
};

export default withTheme(DarkWallpaper);
