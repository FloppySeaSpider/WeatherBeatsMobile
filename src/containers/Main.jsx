import React, { useEffect } from 'react';
import {
  ImageBackground, StyleSheet, Text, View,
} from 'react-native';
import { Input } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/thunks';
import Player from '../components/Player';

export default function Main() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.updater);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  return (
    <ImageBackground source={require('../assets/bg/gif_rain.gif')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.title}>WeatherBeats</Text>
        <Player />
        <Input style={styles.zipcode} placeholder="Zipcode" size="large" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  // zipcode: {
  //   display: "absolute",
  //   marginTop: 200,
  //   marginLeft: 40,
  //   marginRight: 40,
  //   size: "large",
  // }
});
