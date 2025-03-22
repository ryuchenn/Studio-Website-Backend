import admin from "firebase-admin";
import { serviceAuthBase64 } from "../../constants/DBSetting.ts"
let serviceAccount: admin.ServiceAccount;

if (serviceAuthBase64) {
  serviceAccount = JSON.parse(
    // base64 -i firebaseAuth.json
    Buffer.from(serviceAuthBase64, "base64").toString("utf-8")
  );
} else {
  const jsonModule = await import("../../../key/firebaseAuth.json", {
    assert: { type: "json" },
  });
  serviceAccount = jsonModule.default as admin.ServiceAccount;
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
