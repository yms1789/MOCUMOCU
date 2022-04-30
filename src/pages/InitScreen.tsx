import React, {useCallback} from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
const image = require('../assets/initScreen.png');

type InitScreenProps = NativeStackScreenProps<RootStackParamList, 'InitScreen'>;

function InitScreen({navigation}: InitScreenProps) {
  const toSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);
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
        <View style={styles.startZone}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#e6e6e6' : 'white',
              },
              styles.startButton,
              {marginBottom: '2%'},
            ]}
            onPress={toSignIn}>
            <Text style={[styles.startButtonText, {color: '#59a0dd'}]}>
              점주로 시작하기
            </Text>
          </Pressable>

          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#e6e6e6' : 'white',
              },
              styles.startButton,
              {marginBottom: '2%'},
            ]}
            onPress={toSignIn}>
            <Text style={[styles.startButtonText, {color: '#e27662'}]}>
              회원으로 시작하기
            </Text>
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
  startZone: {
    marginTop: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    width: '77%',
    height: '23%',
    borderRadius: 8,
    elevation: 5,
  },
  startButtonText: {
    fontFamily: 'NotoSansCJKkr-Black (TTF)',
    height: '100%',
    marginBottom: '1%',
  },
});
export default InitScreen;
