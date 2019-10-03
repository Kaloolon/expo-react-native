import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PickerCascader, PicketIOS } from '../../components';

const options = [
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'},
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'},
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'},
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'},
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'},
  {label: 'USD', value: 'usd'},
  {label: 'VND', value: 'vnd'},
  {label: 'HKD', value: 'hkd'}
];

const LandingPage = () => {
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <PickerCascader
        searchable
        placeholder='Please select a amount'
        label='Amount'
        value={value}
        onChange={(item) => setValue(item)}
        options={options}
      />
      <PicketIOS />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});


export default LandingPage;