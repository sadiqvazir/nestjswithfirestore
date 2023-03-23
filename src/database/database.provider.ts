// import { initializeApp } from "firebase-admin";
import * as admin from 'firebase-admin'
import * as adminapp  from "firebase-admin/app";
import * as firestore  from "firebase-admin/firestore"
// import { Firestore } from 'firebase-admin/firestore';
// import * as service from '../../conf/firebaseconfig.json'

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): firestore.Firestore => {

            try {
                // const serviceAccount = require('./path/to/serviceAccountKey.json');
                const serviceAccount = require('../../conf/firebaseconfig.json');
                admin.initializeApp({
                    credential: adminapp.cert(serviceAccount)
                });
                return firestore.getFirestore();
            }
            catch (err) {
                throw err;
            }

        }
    }]