import React from "react";
import { View, Text } from "react-native";

import headerStyles from "../styles/headerStyles";

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerViewChild}>
        <Text style={headerStyles.title}>TO DO</Text>
      </View>
    </View>
  );
};

export default Header;
