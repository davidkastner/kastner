// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "protein.webp",
    name: "David W. Kastner",
    email: "kastner@mit.com",
    phone: "+707 492-5558",
    location: "Cambridge, MA, United States"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyAhiTM_2k5IGReiKT3Da1-7RIUYYZhmhf0",
    authDomain: "kastnerio.firebaseapp.com",
    projectId: "kastnerio",
    storageBucket: "kastnerio.appspot.com",
    messagingSenderId: "925747782169",
    appId: "1:925747782169:web:ede43f5439d5c970cb4088",
    measurementId: "G-4QQGKQ3S0E"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
