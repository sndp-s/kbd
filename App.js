import React from 'react';

import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const App = () => {
  return (
    <View style={page.container}>
      <Button title={'SUPER'} onPress={() => Alert.alert('sending super command to the PC')}></Button>
    </View>
  );
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
});

export default App;
