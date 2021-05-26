/**
 *
 * App router
 *
 *
 * App Name:          React Native Boiler Plate with Firebase
 * Version:           1.0.0
 * Author:            Muhammad Waseem
 *
 * @since             1.0.0
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import {RootStack} from '../stacks';
import {NotConnected} from '../components/containers';
import {mainStyles} from '../styles';

const AppRouter = props => {
  const [isConnected, setConnected] = useState(true);
  const [isCheck, setCheck] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
      if (isCheck && isConnected) {
        setConnected(true);
        setCheck(false);
      }
    });
  }, [isConnected, isCheck]);

  const checkInternet = () => {
    setCheck(true);
  };

  return (
    <View style={mainStyles.mainView}>
      <StatusBar />
      {!isConnected ? <NotConnected clickTry={checkInternet} /> : <RootStack />}
    </View>
  );
};

export default AppRouter;
