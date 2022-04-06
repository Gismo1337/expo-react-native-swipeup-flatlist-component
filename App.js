import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import FlatListHorizontal from './components/FlatListHorizontal';

const image = require("./assets/header.jpg");

// You can load this data from a JSON file or from an API
const workstation = [
  {
    id: '1',
    name: 'Hardware',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores illum repellendus nam autem, vitae distinctio. Quod ab nemo, unde corrupti praesentium quisquam hic vitae ea, illum non autem mollitia animi nihil ut molestias repudiandae magnam architecto laboriosam veniam eius et laborum eligendi! Commodi, deserunt quae. Sunt maiores voluptatem molestias.',
    imgPath: require("./assets/pc.jpg"),
  },
  {
    id: '2',
    name: 'Software',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores illum repellendus nam autem, vitae distinctio. Quod ab nemo, unde corrupti praesentium quisquam hic vitae ea, illum non autem mollitia animi nihil ut molestias repudiandae magnam architecto laboriosam veniam eius et laborum eligendi! Commodi, deserunt quae. Sunt maiores voluptatem molestias.',
    imgPath: require("./assets/software.jpg"),
  },
  {
    id: '3',
    name: 'System',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores illum repellendus nam autem, vitae distinctio. Quod ab nemo, unde corrupti praesentium quisquam hic vitae ea, illum non autem mollitia animi nihil ut molestias repudiandae magnam architecto laboriosam veniam eius et laborum eligendi! Commodi, deserunt quae. Sunt maiores voluptatem molestias.',
    imgPath: require("./assets/ubuntu.jpg"),
  },
  {
    id: '4',
    name: 'Connection',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores illum repellendus nam autem, vitae distinctio. Quod ab nemo, unde corrupti praesentium quisquam hic vitae ea, illum non autem mollitia animi nihil ut molestias repudiandae magnam architecto laboriosam veniam eius et laborum eligendi! Commodi, deserunt quae. Sunt maiores voluptatem molestias.',
    imgPath: require("./assets/internet.jpg"),
  },
];

export default function App() {

  const [animationValue] = useState(new Animated.Value(0));

  const backgroundInterpolate = animationValue.interpolate({
    // inputRange: [Pixel when start animation, Pixel when end animation]
    inputRange: [0, 200],
    // inputRange: [Color at start animation (mostly transparent), Color when end animation]
    outputRange: ["rgba(98, 0, 238, 0.0)", "rgba(98, 0, 238, 0.7)"]
  })

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate
  }

  const TitleInterpolate = animationValue.interpolate({
    // To show the Title ("Animated Flatlist Component") immidiately if 200 pixel scrolled.
    inputRange: [200, 200],
    outputRange: ["rgba(255,255,255, 0.0)", "rgba(255,255,255, 1.0)"]
  })

  const titleTextStyle = {
    color: TitleInterpolate
  }

  function onPressFn(item) {
    // Random function to simulate onPress at item
    alert(item.name + " \n\n" + item.text);
  }

  return (

    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: animationValue } } }],
            { useNativeDriver: false })}
        >
          <Animated.View style={[styles.scrollViewStyle, backgroundStyle]}>
            <StatusBar style="auto" />
            <View style={styles.spacer}></View>
            <Animated.Text style={[styles.scrollText, titleTextStyle]}>Animated Flatlist Component</Animated.Text>

            {/* To create a Anmation you need three or more Components  */}
            <FlatListHorizontal headline={'Cat 1'} listData={workstation} onPressFn={onPressFn} />
            <FlatListHorizontal headline={'Cat 2'} listData={workstation} onPressFn={onPressFn} />
            <FlatListHorizontal headline={'Cat 3'} listData={workstation} onPressFn={onPressFn} />
            <FlatListHorizontal headline={'Cat 4'} listData={workstation} onPressFn={onPressFn} />

          </Animated.View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 450,
  },
  scrollText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  }
});
