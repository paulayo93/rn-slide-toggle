// component state management
import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native"; // A
import { StatusBar } from "expo-status-bar";

export default  BuiltInSlideToggle = () => {
  // define a isWifiEnabled state variable and set the default value to false
  const [isWifiEnabled, setIsWifiEnabled] = useState(false);

  // Handle changing the isWifiEnabled when button is clicked
  const wifiToggleSwitch = () =>
    setIsWifiEnabled((previousState) => !previousState);

  // Render a view with different style classes
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Wifi</Text>
        <View style={styles.subOptionContainer}>
          <Text>Current Status is {isWifiEnabled ? "On" : "Off"}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isWifiEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={
              wifiToggleSwitch
            } /** call the wifiToggleSwitch when onValueChange callback */
            value={isWifiEnabled}
          />
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  optionText: {
    fontSize: 20,
    color: "gray",
  },
  option: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
  },
  subOptionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },
});
