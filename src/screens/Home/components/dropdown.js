import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import data from './data';


const Dropdown = ({setValue, title}) => {

  return (
    <SelectDropdown
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonTextStyle}
      dropdownStyle={styles.dropdownStyle}
      data={data}
      onSelect={(item) => setValue(item.label)}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem.label;
      }}
      rowTextForSelection={(item) => {
        return item.label;
      }}
      defaultButtonText={title}
      renderDropdownIcon={() => (
        <Icon name="caret-down" size={30} color="#900" />
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTextStyle: { fontWeight: "bold" },
  dropdownStyle: { backgroundColor: "#fee8ab", borderRadius: 10 },
});

export default Dropdown;
