<template>
  <div>
    <!-- Navbar will go here -->
    <Navigation />
    <div class="top"></div>
    <div class="container">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="{
          enabled: true
        }"
        theme="black-rhino"
      />
    </div>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Navigation from "../components/AdminTopNav.vue";
export default {
  components: {
    VueGoodTable,
    Navigation
  },
  name: "timetable",
  data() {
    return {
      rows: [],
      columns: [
        {
          label: "Course",
          field: "course"
        },
        {
          label: "Day",
          field: "day"
        },
        {
          label: "Course Code",
          field: "courseCode"
        },
        {
          label: "Room",
          field: "room"
        },
        {
          label: "Lecturer",
          field: "lecturer"
        },
        {
          label: "Duration",
          field: "duration"
        }
      ]
    };
  },
  created() {
    this.rows = this.$store.getters.getTimeTable;
  }
};
</script>
<style scoped>
.top {
  height: 10vh;
}
</style>
