
import React, { useState, useEffect } from "react"; // React core library and hooks

// View component
import { StyleSheet, View, Text } from "react-native";

// the third party library for slide toggle
import Toggle from "react-native-toggle-element";

import { StatusBar } from "expo-status-bar";

// Icon component, installed during expo setup
import { Fontisto } from "@expo/vector-icons"; 

// Global state storage to effect changes access the application
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux-store/reducers"; 

export default function SlideToggle() {
  // state variable within the component
  const [toggleValue, setToggleValue] = useState(false);


  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [mode, setMode] = useState(theme.mode);

  const onToggle = (val) => {
    dispatch(changeMode(val)); // invoke the changeMode function and pass argument

    setToggleValue(val); // update the toggleValue state variable
  };

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <>
      <View
        style={mode == "light" ? styles.container_light : styles.container_dark}
      >
        <Text style={mode == "light" ? styles.text_light : styles.text_dark}>
          We are on {theme.mode} mode!
        </Text>
        <Toggle
          value={toggleValue}
          onPress={(val) => onToggle(val)} // we access the val variable inside toggle component
          thumbActiveComponent={
            <Fontisto
              name="sun"
              color="black"
              width="40"
              height="40"
              fill={"#3BD2B5"}
            />
          }
          thumbInActiveComponent={
            <Fontisto
              name="night-clear"
              color="black"
              width="40"
              height="40"
              fill={"#03452C"}
            />
          }
          trackBar={{
            activeBackgroundColor: "#9ee3fb",
            inActiveBackgroundColor: "#3c4145",
            borderActiveColor: "#86c3d7",
            borderInActiveColor: "#1c1c1c",
            borderWidth: 5,
            width: 100,
          }}
        />
        <StatusBar style={mode === "light" ? "dark" : "light"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container_light: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container_dark: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },

  text_light: {
    marginBottom: 20,
    color: "#000",
  },

  text_dark: {
    marginBottom: 20,
    color: "#fff",
  },
});
