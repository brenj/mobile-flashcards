import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'MobileFlashcards:notification';

function getNotificationConfig() {
  return {
    title: 'Mobile Flashcards',
    body: "Don't forget to quiz yourself today!",
  };
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then((data) => {
      if (JSON.parse(data) === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              // Create time notification will go off
              const time = new Date();
              time.setDate(time.getDate() + 1);
              time.setHours(20);
              time.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(getNotificationConfig(), { time, repeat: 'day' });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}
