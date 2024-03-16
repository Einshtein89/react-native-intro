import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Linking,
  Platform,
} from "react-native";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { s } from "./ProfileCards.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { TransformXWithSpringView } from "../Utils/TransformXWithSpringView";

const ProfileCard = ({
  firstName,
  lastName,
  isOpenToWork,
  onPress,
  goToSocialMediaPage,
}) => {
  return (
    <TransformXWithSpringView initValue={200}>
      <View style={s.container}>
        <View style={s.header}>
          <View>
            <Image
              style={s.avatar}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
          </View>
          <View style={s.texts}>
            <TouchableOpacity
              onPress={() => onPress(firstName + " " + lastName)}
            >
              <Text style={s.name}>Hi there!</Text>
              <Text>
                I'm {firstName} {lastName}
              </Text>
            </TouchableOpacity>
            <Text style={{ backgroundColor: isOpenToWork ? "green" : "red" }}>
              {isOpenToWork
                ? "I'm open to work"
                : "I'm" + " not" + " looking" + " for a job"}
            </Text>
          </View>
        </View>
        <View style={s.social}>
          <TouchableOpacity
            style={s.socialButton}
            onPress={() => goToSocialMediaPage("twitter")}
          >
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={s.socialButton}
            onPress={() => goToSocialMediaPage("linkedin")}
          >
            <FontAwesome name="linkedin" size={24} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={s.socialButton}
            onPress={() => goToSocialMediaPage("github")}
          >
            <FontAwesome name="github" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </TransformXWithSpringView>
  );
};

export function ProfileCards() {
  const sayHello = (name) => {
    Alert.alert("Hello " + name);
  };

  const goToSocialMediaPage = (mediaName) => {
    let url;
    switch (mediaName) {
      case "twitter":
        url = "https://github.com/Einshtein89";
        break;
      case "github":
        url = "https://github.com/Einshtein89";
        break;
      case "linkedin":
        url = "https://github.com/Einshtein89";
        break;
    }
    Linking.openURL(url);
  };

  const users = [
    { firstName: "First", lastName: "1" },
    { firstName: "Second", lastName: "2" },
  ];
  return (
    <SafeAreaView style={s.wrapper}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {Platform.OS === "android" && <Text>We are on Android!</Text>}
        {Platform.OS === "ios" && <Text>We are on iOS!</Text>}
      </View>
      <View>
        {users.map((user, index) => {
          return (
            <ProfileCard
              key={index}
              firstName={user.firstName}
              lastName={user.lastName}
              isOpenToWork
              onPress={sayHello}
              goToSocialMediaPage={goToSocialMediaPage}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
