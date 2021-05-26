import React from 'react';

import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';

const ForgotPassword = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.pop();
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Forgot Password'}>
      <Text medium>Forgot Password</Text>
    </DarkWallpaper>
  );
};

export default ForgotPassword;
