import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>React native Push notification using FCM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default App;
