import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCCgbnNGGlRwUiW_Nqq75v9cACuNqpQbNc",
  authDomain: "booking-master-6eaee.firebaseapp.com",
  projectId: "booking-master-6eaee",
  storageBucket: "booking-master-6eaee.firebasestorage.app",
  messagingSenderId: "176128371052",
  appId: "1:176128371052:web:e63920a5fa50a5f6d5ab49"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient(),
    //
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase()),
    // provideStorage(() => getStorage()),
    // provideFunctions(() => getFunctions()),
  ],
};
