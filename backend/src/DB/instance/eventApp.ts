import admin from 'firebase-admin';
import { serviceEventBase64 } from "../../constants/DBSetting.ts"
let serviceAccount: admin.ServiceAccount;

if (serviceEventBase64) {
  serviceAccount = JSON.parse(
    // base64 -i firebaseEvent.json
    Buffer.from(serviceEventBase64, "base64").toString("utf-8")
  );
} else {
  const jsonModule = await import("../../../key/firebaseEvent.json", {
    assert: { type: "json" },
  });
  serviceAccount = jsonModule.default as admin.ServiceAccount;
}

const eventApp = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  },
  "event"
);
const eventDb = eventApp.firestore();
const eventMessaging = eventApp.messaging();
const eventStorage = eventApp.storage();

export { eventDb, eventMessaging, eventStorage };
