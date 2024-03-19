import React, { useState, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";

const rowTranslateAnimatedValues = {};
Array(10)
  .fill("")
  .forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });
export const SwipeToDeleteByFullSwiping = ({
  swipeList,
  setTodoList,
  onPress,
}) => {
  // list.forEach((_, i) => {
  //   rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  // });
  swipeList.forEach((elem) => (elem.key = elem.id));

  // Array(swipeList.length)
  //   .fill("")
  //   .forEach((_, i) => {
  //     rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  //   });
  // const [listData, setListData] = useState(
  //   Array(list.length)
  //     .fill("")
  //     .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  // );
  // [listData, setListData] = useState(
  //   list.map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  // );

  // Array(list.length)
  //   .fill("")
  //   .forEach((_, i) => {
  //     rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  //   });

  const animationIsRunning = useRef(false);

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    if (
      value < -Dimensions.get("window").width &&
      !animationIsRunning.current
    ) {
      animationIsRunning.current = true;
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...swipeList];
        const prevIndex = swipeList.findIndex((item) => item.key === key);
        newData.splice(prevIndex, 1);
        setTodoList(newData);
        animationIsRunning.current = false;
      });
    }
  };

  const renderItem = (data) => (
    <Animated.View
      style={[
        styles.rowFront,
        // {
        //   height: rowTranslateAnimatedValues[data.item.key].interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, 50],
        //   }),
        // },
      ]}
    >
      <TouchableHighlight
        // onRowPress={() => setSelectedId(data.id)}
        style={styles.rowFront}
        underlayColor={"#AAA"}
      >
        <View>
          {/*<Text>I am {data.item.text} in a SwipeListView</Text>*/}
          <Text>I am {data.item.title} in a SwipeListView</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );

  return (
    <View>
      <SwipeListView
        disableRightSwipe
        data={swipeList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get("window").width}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
