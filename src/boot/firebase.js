import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { useCurrentUserStore } from "stores/currentUser"

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export default boot(({ app, router, store, Vue }) => {
  const firebaseApp = initializeApp(config);
  const auth = getAuth(firebaseApp);

  app.config.globalProperties.$auth = auth;
  app.config.globalProperties.$db = getFirestore(firebaseApp);

  router.beforeEach((to, from, next) => {
    let authorized = useCurrentUserStore().isAuthorized();
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (!authorized && to.path !== '/auth') {
      next('auth');
    } else if (authorized && to.path === '/auth') {
      next('/');
    }

    next();
  })
})
