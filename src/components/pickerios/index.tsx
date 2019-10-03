import React, { useState } from "react";
import { ActionSheetIOS, View, Text } from "react-native";

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

const PickerIOS = () => {
  const [clicked, setClicked] = useState();
  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      setClicked(BUTTONS[buttonIndex]);
    })
  };
  return (
    <View>
      <Text onPress={showActionSheet}>
        Click to show the ActionSheet
      </Text>
    </View>
  );
}

export default PickerIOS;
