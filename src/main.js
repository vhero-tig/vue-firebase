import firebase from 'firebase'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const config = {
  apiKey: 'AIzaSyDuGyg8E611IHF_aqCt0hRT_S4uHVeSmTU',
  authDomain: 'vue-firebase-d3e70.firebaseapp.com',
  databaseURL: 'https://vue-firebase-d3e70.firebaseio.com',
  projectId: 'vue-firebase-d3e70',
  storageBucket: 'vue-firebase-d3e70.appspot.com',
  messagingSenderId: '387718240497'
}

firebase.initializeApp(config)

createApp(App).use(router).mount('#app')




