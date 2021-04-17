import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const serviceAccount = require("../admin-key.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "",
});

const firestore = admin.firestore();

'use strict';
const sample = require("./functions/sample");

exports.test = functions.https.onCall((data, context) => {
	return sample.test(data, context, firestore);
});

// function checkVerification(context: any) {
// 	if (!context.auth.token.email_verified) {
// 		throw new functions.https.HttpsError(
// 			"failed-precondition",
// 			"The function must be called while authenticated."
// 		);
// 	}
// }
