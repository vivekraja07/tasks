<template>
    <div class="tasks">
    <h1>Welcome, Vivek</h1>
    <table>
      <thead>
        <tr>
          <th @click="sort('day')">Due Date</th>
          <th @click="sort('time')">Due Time</th>
          <th @click="sort('name')">Name</th>
          <th @click="sort('class')">Class</th>
          <th @click="sort('done')">Completed</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="task in sortedTasks" v-bind:key = "task.name">
          <td>{{task.day}}</td>
          <td>{{task.time}}</td>
          <td>{{task.name}}</td>
          <td>{{task.class}}</td>
          <td>{{task.done}}</td>          
        </tr>
      </tbody>


    </table>

    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <Form v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
    <h3 slot="header">custom header</h3>

    </Form>

  </div>
</template>

<script>
import Form from './Form.vue'

export default {
  name: 'Table',
  props: {
    msg: String
  },
  components: {
    Form
  },
  computed: {
    sortedTasks() {
      return this.tasks.sort((a,b) => {
        let modifier = 1
        if(this.currentSortDir === 'desc') modifier = -1
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  methods: {
    sort: function (s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    }
  },
  data: function() {
    return {
      currentSort: 'day',
      currentSortDir: 'asc',
      showModal: false,
      tasks: [
        {
          day: "Feb 9",
          time: "10 AM",
          name: "Make website 1",
          class: "CS 4500",
          done: "Yes"
        },
        {
          day: "Feb 8",
          time: "10 AM",
          name: "Make website 2",
          class: "CS 4500",
          done: "Yes"
        },
        {
          day: "Feb 9",
          time: "8 AM",
          name: "Make website 3",
          class: "CS 4500",
          done: "Yes"
        }
      ]
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
    border-radius: 5px;
    margin: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    height: 50px;
    background-color: #003057;
    color: white;
  }

  table, th, td {
    border: 1px solid black;
  }

  th, td {
    padding: 15px;
  }

    h1 {
        font-size: 26px;
        color: #003057;
        font-family: roboto;
    }

  tr:hover {background-color: #f5f5f5;}
</style>



