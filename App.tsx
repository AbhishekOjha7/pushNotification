import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  requestUserPermission,
  NotificationListner,
} from './src/utils/pushNotificationController';
import ForeGround from './src/utils/foreGround';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{'PUSH NOTIFICATION'}</Text>
      <ForeGround />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
