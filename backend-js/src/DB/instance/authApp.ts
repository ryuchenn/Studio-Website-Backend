// import admin from "firebase-admin";
// import { existsSync } from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { serviceAuthBase64 } from "../../constants/DBSetting.ts"
// let serviceAccount: admin.ServiceAccount;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// if (serviceAuthBase64) {
//   serviceAccount = JSON.parse(
//     // base64 -i firebaseAuth.json
//     Buffer.from(serviceAuthBase64, "base64").toString("utf-8")
//   );
// } else {
//   const filePath = path.resolve(__dirname, "../../../key/firebaseAuth.json");

//   if (existsSync(filePath)) {
//     const jsonModule = await import(filePath, {
//       assert: { type: "json" },
//     });
//     serviceAccount = jsonModule.default as admin.ServiceAccount;
//   } else {
//     throw new Error("Firebase credentials not found in env or file.");
//   }
// }

// const authApp = admin.initializeApp(
//   {
//     credential: admin.credential.cert(serviceAccount),
//   },
//   "auth"
// );

// const authDb = authApp.firestore();
// const authAuth = authApp.auth();
// const authStorage = authApp.storage();

// export { authDb, authAuth, authStorage };
