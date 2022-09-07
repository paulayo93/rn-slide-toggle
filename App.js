import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated, // import the animated libriary
  ImageBackground,
} from "react-native";

export default function App() {
  const translateAnimate = useRef(new Animated.Value(0)).current;
  const [isToggle, setIsToggle] = useState(false);

  const animateInterpolate = translateAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 46],
    extrapolate: "clamp",
  });

  const animateElement = () => {
    const toValue = isToggle ? 0 : 1;

    Animated.timing(translateAnimate, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsToggle(!isToggle);
    });
  };

  const animationStyle = {
    transform: [
      {
        translateX: animateInterpolate,
      },
    ],
  };

  return (
    <ImageBackground
      source={require("./assets/home.jpg")}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => animateElement()}>
        <View style={styles.toggleContainer}>
          <Animated.View
            style={[styles.toggle, animationStyle]}
          ></Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleContainer: {
    borderRadius: 20,
    borderWidth: 0,
    height: 35,
    width: 80,
    backgroundColor: "grey",
    justifyContent: "center",
    paddingHorizontal: 2
  },
  toggle: {
    backgroundColor: "blue",
    height: 30,
    width: 30,
    borderRadius: 16,
    borderWidth: 0,
  },
});
