import { s } from "../../App.style";
import { Button, createIcon } from "@carbon/react-native";
import { Text, View } from "react-native";
import AddIcon from "@carbon/icons/es/add/20";
import { SafeAreaView } from "react-native-safe-area-context";

export const CarbonTest = () => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.box1}>
        <Text style={s.title}>BBBB</Text>
      </View>
      <View style={s.box2}>
        <Text style={s.title}>CCCC</Text>
      </View>
      <View style={s.box3}>
        <Text style={s.title}>AAAAAA</Text>
      </View>
      <Button
        icon={AddIcon}
        style={s.button}
        kind="primary"
        text="Button"
        onPress={() => {}}
      />
      <View style={s.square}>{createIcon(AddIcon, 50, 50)}</View>
    </SafeAreaView>
  );
};
