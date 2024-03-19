import { Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Card } from "../Cards/Card";
import { styles } from "./SwipeList.style";

export const SwipeToDeleteWithButtons = ({
  dataList,
  setTodoList,
  onRowPress,
  setHasCountChanges,
}) => {
  dataList.forEach((elem) => (elem.key = elem.id));

  // Function to close a swiped row
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  // Function to delete an item from the list
  const deleteItem = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...dataList];
    const prevIndex = dataList.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setHasCountChanges(true);
    setTodoList(newData);
  };

  // Function to render each list item
  const renderItem = (rowData) => (
    <Card todo={rowData.item} onPress={onRowPress} />
  );

  // Function to render hidden swipe actions
  const renderHiddenItem = (rowData, rowMap) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.detailsButton]}
        onPress={() => closeRow(rowMap, rowData.item.key)}
      >
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.closeButton]}
        onPress={() => closeRow(rowMap, rowData.item.key)}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => deleteItem(rowMap, rowData.item.key)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={dataList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </View>
  );
};
