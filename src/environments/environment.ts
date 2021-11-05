// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_MARVEL_CHARACTERS: 'http://gateway.marvel.com/v1/public/characters?ts=1636063717&apikey=f7ae8ad508e93f0d9abe1502d0755727&hash=48892a9651be0bc38190cfcb0f39c485&limit=6',
  API_MARVEL_SERIES: 'http://gateway.marvel.com/v1/public/series?ts=1636063717&apikey=f7ae8ad508e93f0d9abe1502d0755727&hash=48892a9651be0bc38190cfcb0f39c485&limit=6',
  API_MARVEL_COSMICS: 'http://gateway.marvel.com/v1/public/comics?ts=1636063717&apikey=f7ae8ad508e93f0d9abe1502d0755727&hash=48892a9651be0bc38190cfcb0f39c485&limit=6'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
