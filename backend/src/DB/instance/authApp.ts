import admin from "firebase-admin";
import serviceAccount from "../../../key/firebaseAuth.json" with { type: "json" };

const authApp = admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    },
    "auth"
);

const authDb = authApp.firestore();
const authAuth = authApp.auth();
const authStorage = authApp.storage();

export { authDb, authAuth, authStorage };
