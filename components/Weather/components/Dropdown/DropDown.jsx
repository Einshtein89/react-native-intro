import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

/**
 *
 * @param props
 */
export default function DropDown({
  items,
  selectedItem,
  setSelectedItem,
  styles,
}) {
  const [open, setOpen] = useState(false);
  const [singleValue, setSingleValue] = useState(selectedItem);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={singleValue}
        items={items}
        setOpen={setOpen}
        setValue={setSingleValue}
        onSelectItem={(item) => setSelectedItem(item.value)}
        multiple={false}
        showArrowIcon={false}
        showTickIcon={false}
        {...styles}
      />
    </View>
  );
}
