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
    color: "#000",
    fontSize: 14,
  },
  checkedButton: {
    marginRight: 19,
    borderColor: "#0085FF",
    borderWidth: 2,
  },
  checkedButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default styles;
