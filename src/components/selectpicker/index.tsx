import React, { useState } from 'react';
import { View } from 'react-native';
import Select2 from 'react-native-select-two';

const mockData = [
  { id: 1, name: 'React Native Developer' },
  { id: 2, name: 'Android Developer' },
  { id: 3, name: 'iOS Developer' }
];

const SelectPicker = (props) => {
  const [data, setData] = useState();
  return (
    <View>
        <Select2
          showSearchBox
          isSelectSingle
          style={{ borderRadius: 5 }}
          colorTheme={'blue'}
          popupTitle='Select item'
          title='Select item'
          data={mockData}
          onSelect={data => setData(data)}
          onRemoveItem={data => setData(data)} 
        />
    </View>
  );
}

export default SelectPicker;
