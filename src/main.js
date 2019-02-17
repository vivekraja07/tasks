import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

let app = ''

// Iniialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBaqe7ilV5RL8NH9gQl8Pk9uMUyLjopZuM",
    authDomain: "tasks-928e1.firebaseapp.com",
    databaseURL: "https://tasks-928e1.firebaseio.com",
    projectId: "tasks-928e1",
    storageBucket: "tasks-928e1.appspot.com",
    messagingSenderId: "319819906944"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
