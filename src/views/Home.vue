<template>
  <div class="home">
    <Table msg="Welcome to Your Vue.js App"/>
    <button @click="logout"> Logout </button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import Table from '@/components/Table.vue'

export default {
  name: 'home',
  components: {
    Table
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
