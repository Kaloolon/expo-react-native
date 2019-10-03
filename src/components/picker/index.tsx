import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';

interface PickerProps {
  label?: string,
  value?: any,
  style?: object,
  searchable: boolean,
  placeholder?: string,
  onChange?: (value: any) => void,
  options: Array<any>;
  getValueOption: (item: any) => any,
  getLabelOption: (item: any) => any,
  input?: {
    name: string,
    value: any,
    onChange: (value: any) => void,
    onBlur: () => void,
    onFocus: () => void
  },
  meta?: {
    touched: boolean,
    error: string,
    warning: string
  }
};

const PickerCascader =  (props: PickerProps) => {
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState('');
  const value = props.input ? props.input.value : props.value;
  const setValue = props.input ? props.input.onChange : props.onChange;
  const options = useMemo(() =>
    props.options.filter(item => (props.getLabelOption(item) || '').toLowerCase().includes((searchText || '').toLowerCase())), [searchText]);
  const handleSelectedItem = (item) => {
    setValue(item);
    setShow(false);
    setSearchText('');
  }
  return (
    <View style={{...props.style, ...styles.container }}>
      {props.label && <Text>{props.label}</Text>}
      <TouchableOpacity onPress={() => setShow(true)} style={styles.button}>
        {value ? <Text>{props.getLabelOption(value)}</Text> : <Text>{props.placeholder}</Text>}
        <Modal isVisible={show} style={styles.modal}>
          <View style={styles.content}>
            <View style={styles.listContent}>
              {props.searchable === true &&
                <TextInput
                  style={styles.searchInput}
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />}
                <FlatList
                  style={styles.list}
                  data={options}
                  renderItem={({ item }) => <TouchableOpacity onPress={() => handleSelectedItem(item)}><Text style={styles.optionItem}>{props.getLabelOption(item)}</Text></TouchableOpacity>}
                  keyExtractor={(item) => props.getValueOption(item)}
                />
            </View>
            <View style={styles.cancelButton}>
              <Button title='Cancel' onPress={() => setShow(false)} />
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}

PickerCascader.defaultProps = {
  getLabelOption: (item) => item.label,
  getValueOption: (item) => item.value,
  options: [],
  searchable: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 20,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 4,
    padding: 5,
    justifyContent: 'center'
  },
  searchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 4,
    padding: 5
  },
  list: {
    paddingTop: 20,
    paddingBottom: 20
  },
  optionItem: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10
  },
  listContent: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    height: 300
  },
  cancelButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5
  }
});

export default PickerCascader;
