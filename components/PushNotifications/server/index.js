const Expo = require("expo-server-sdk").default;

const params = process.argv;
const TOKEN = params[2];
const expo = new Expo();

const sendNotification = async (token) => {
  if (!Expo.isExpoPushToken(token)) {
    console.log(`${token} is not an expo token!`);
    return;
  }
  const notificationResponse = await expo.sendPushNotificationsAsync([
    {
      to: token,
      title: "Hello!",
      body: "This is an expo notification!",
      data: { someData: 123 },
    },
  ]);
  console.log("Notification sent: ", notificationResponse);
};

sendNotification(TOKEN);
