import {StyleSheet, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const ForeGround = () => {
  useEffect(() => {
    const Unscribe = messaging().onMessage(async remoteMessage => {
      console.log('notification on foreground', remoteMessage);
      PushNotification.localNotification({
        channelId: '0:1675676839932056%ff91e4e1ff91e4e1',
        title: 'my app',
        message: 'my notificdation',
        body: 'test app',
        soundName: 'default',
        vibrate: true,
        playSound: true,
      });
    });
    return Unscribe;
  }, []);
  return null;
};

export default ForeGround;

const styles = StyleSheet.create({});
