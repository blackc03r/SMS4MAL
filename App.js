import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.normalText}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 13,
    color: 'dodgerblue',
  },
  headingText: {
    fontSize: 18.5,
    color: 'blue',
  },

})

export default App;