import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import CustomText from '../../text';
import ImageView from '../../imageView';
import {styles} from './styles';
import {NOT_CONNECTED} from '../../../assets/images';

const NotConnected = props => {
  const {clickTry} = props;

  return (
    <View style={styles.main}>
      <ImageView source={NOT_CONNECTED} style={styles.image} />
      <CustomText medium h2 style={styles.textTitle}>
        Not Connected
      </CustomText>
      <CustomText colorSecondary style={styles.textSubtitle}>
        Please check your internet connection and try again
      </CustomText>
      <TouchableOpacity style={styles.button} onPress={clickTry}>
        <CustomText medium bold style={styles.buttonText}>
          Try Again
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default NotConnected;
