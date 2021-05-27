import React from 'react';

import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';

const LoginViaPhoneNumber = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.pop();
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Login via Phone Number'}>
      <Text medium>Login via Mobile</Text>
    </DarkWallpaper>
  );
};

export default LoginViaPhoneNumber;
