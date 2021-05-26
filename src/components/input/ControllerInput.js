import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import {styles} from './styles';
import {colors} from '../../config';

const ControllerInput = props => {
  console.log('ControllerInput, Props: ', props);
  const {
    control,
    defaultValue,
    inputName,
    label,
    validationRules,
    errors,
    ...rest
  } = props;
  return (
    <View style={styles.inputContainer}>
      <Controller
        name={inputName}
        control={control}
        rules={validationRules}
        defaultValue={defaultValue}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...rest}
            placeholderTextColor={colors.whiteLight}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
      />
    </View>
  );
};

ControllerInput.prototype = {
  control: PropTypes.object,
  defaultValue: PropTypes.string,
  inputName: PropTypes.string,
  label: PropTypes.string,
  validationRules: PropTypes.object,
  errors: PropTypes.object,
};

ControllerInput.defaultProps = {
  control: {},
  defaultValue: '',
  inputName: '',
  label: '',
  validationRules: {},
  errors: null,
};

export default ControllerInput;
