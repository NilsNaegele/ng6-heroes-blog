// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:  {
  apiKey: 'AIzaSyC5ShPI5SEZB6OeweAZXq7x8ME4K-5CKtk',
  authDomain: 'ng6-heroes-blog.firebaseapp.com',
  databaseURL: 'https://ng6-heroes-blog.firebaseio.com',
  projectId: 'ng6-heroes-blog',
  storageBucket: 'ng6-heroes-blog.appspot.com',
  messagingSenderId: '739935642232'
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
