import React from "react";
import { View, Text } from "react-native";

import styles from "./styles"

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerViewChild}>
        <Text style={styles.title}>TO DO</Text>
      </View>
    </View>
  );
};

export default Header;
