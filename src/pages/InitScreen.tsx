import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
const image = require('../assets/initScreen.png');

function InitScreen() {
  return (
    <View>
      <ImageBackground style={styles.background} source={image}>
        <View style={styles.textWrapper}>
          <Text style={styles.initText}>
            <Text style={(styles.initText, {color: '#ff9d8b'})}>모</Text>
            바일&nbsp;
            <Text style={(styles.initText, {color: '#ff9d8b'})}>쿠</Text>폰
          </Text>
          <Text style={styles.initText}>
            <Text style={(styles.initText, {color: '#ff9d8b'})}>모</Text>
            두의&nbsp;
            <Text style={(styles.initText, {color: '#ff9d8b'})}>쿠</Text>폰
          </Text>
        </View>
        <View>
          <Pressable>
            <Text>점주로 시작하기</Text>
          </Pressable>

          <Pressable>
            <Text>회원으로 시작하기</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {resizeMode: 'stretch', width: '100%', height: '100%'},
  initText: {
    // backgroundColor: 'black',
    // backgroundColor: 'trasparent',
    fontSize: 32,
    fontFamily: 'GmarketSansTTFBold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowRadius: 20,
  },
  textWrapper: {
    marginTop: 84,
    marginLeft: 48,
  },
});
export default InitScreen;
