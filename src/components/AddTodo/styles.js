import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: '100%',
    backgroundColor: "#444",
  },
  inputNewTodoArea: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputNewTodo: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    color: "#fff",
    fontSize: 30,
  },
  addButton: {
    backgroundColor: "#333",
    width: 100,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 50,
  },
});

export default styles;
