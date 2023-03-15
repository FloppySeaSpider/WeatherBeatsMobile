import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Main(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Glorious Title</Text>
      <Text style={styles.subtitle}>
        Somewhat less glorious subtitle
      </Text>
      <Text style={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
});
