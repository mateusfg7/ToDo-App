import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoList: {
    alignSelf: "stretch",
    margin: 20,
  },
  todoListView: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 0,
    marginBottom: 23,
  },
  todoText: {
    color: "#fff",
    fontSize: 40,
  },
  checkedButton: {
    marginRight: 19,
    borderColor: "#333",
    borderWidth: 5,
  },
  // checkedButtonText: {
  //   color: "#fff",
  //   fontSize: 12,
  // },
});

export default styles;
