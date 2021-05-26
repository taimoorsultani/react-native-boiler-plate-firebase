import React from 'react';

import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';

const RegistrationViaEmail = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.pop();
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Registration via Email'}>
      <Text medium>Registration via Email</Text>
    </DarkWallpaper>
  );
};

export default RegistrationViaEmail;
