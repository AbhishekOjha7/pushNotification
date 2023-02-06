import messaging, {firebase} from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import {useEffect} from 'react';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFcmToken();
  }
}

async function GetFcmToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('oldtoken', fcmtoken);
  if (!fcmtoken) {
  }
  try {
    let fcmtoken = messaging().getToken();
    if (fcmtoken) {
      console.log('new token', fcmtoken);
      AsyncStorage.setItem('fcmtoken', await fcmtoken);
    } else {
    }
  } catch (error) {
    console.log('error', error);
  }
}

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
