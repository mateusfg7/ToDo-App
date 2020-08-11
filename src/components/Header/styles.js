import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0085FF",
    height: StatusBar.currentHeight + 70,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerViewChild: {
    height: 70,
    alignSelf: "stretch",

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
});

export default styles;
