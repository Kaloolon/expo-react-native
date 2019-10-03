import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles  from './styles';

interface ITextField {
  label?: string,
  value: string,
  onChange: (value: any) => void
};

export default function (props: ITextField) {
  return (
    <View>
      {props.label && <Text>{props.label}</Text>}
      <TextInput 
        style={styles.wrapper}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};
