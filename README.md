# ChatFlisol

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Prerequisites
+ Require Node 6.9.0 or higher, together with NPM 3 or higher
+ Require Angular-cli 1.0.0

## Instructions

1. Clone the project
2. Navigate to root path project
3. Install dependecies with `npm install`
4. Add your Firebase configuration
5. Run project with `ng serve` and open `http://localhost:4200/`

##  Firebase Configuration

Create new project in Firebase Console and copy configuration in `./src/app/config/firebase.ts`

```typescript
const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).