import admin from 'firebase-admin';
import serviceAccount from "../../../key/firebaseEvent.json" with { type: "json" };

const eventApp = admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    },
    'event'
);

const eventDb = eventApp.firestore();
const eventMessaging = eventApp.messaging();

export { eventDb, eventMessaging };
