import admin from 'firebase-admin';
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { serviceEventBase64 } from "../../constants/DBSetting.ts"
let serviceAccount: admin.ServiceAccount;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (serviceEventBase64) {
  serviceAccount = JSON.parse(
    // base64 -i firebaseEvent.json
    Buffer.from(serviceEventBase64, "base64").toString("utf-8")
  );
} else {
  const filePath = path.resolve(__dirname, "../../../key/firebaseEvent.json");
  
  if (existsSync(filePath)) {
    const jsonModule = await import(filePath, {
      assert: { type: "json" },
    });
    serviceAccount = jsonModule.default as admin.ServiceAccount;
  } else {
    throw new Error("Firebase credentials not found in env or file.");
  }
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
