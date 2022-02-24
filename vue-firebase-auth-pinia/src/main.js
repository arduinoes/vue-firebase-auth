import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvGfqa-J8qjWX5Cc8R1Ku8BPY2woEh1ak",
  authDomain: "museo-f7dc2.firebaseapp.com",
  databaseURL: "https://museo-f7dc2.firebaseio.com",
  projectId: "museo-f7dc2",
  storageBucket: "museo-f7dc2.appspot.com",
  messagingSenderId: "761451708850",
  appId: "1:761451708850:web:40858aa8e7419d164ba4ab",
  measurementId: "G-45VHXFWMEE"
};

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
