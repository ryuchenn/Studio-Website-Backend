import admin from "firebase-admin";
import { existsSync } from "fs";
import path from "path";
import { serviceAuthBase64 } from "../../constants/DBSetting.ts"
let serviceAccount: admin.ServiceAccount;

if (serviceAuthBase64) {
  serviceAccount = JSON.parse(
    // base64 -i firebaseAuth.json
    Buffer.from(serviceAuthBase64, "base64").toString("utf-8")
  );
} else {
  const filePath = path.resolve("key/firebaseAuth.json");

  if (existsSync(filePath)) {
    const jsonModule = await import(`../../../key/firebaseAuth.json`, {
      assert: { type: "json" },
    });
    serviceAccount = jsonModule.default as admin.ServiceAccount;
  } else {
    throw new Error("FIREBASE_AUTH_B64 not set and fallback JSON file not found.");
  }
}

const authApp = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  },
  "auth"
);

const authDb = authApp.firestore();
const authAuth = authApp.auth();
const authStorage = authApp.storage();

export { authDb, authAuth, authStorage };
