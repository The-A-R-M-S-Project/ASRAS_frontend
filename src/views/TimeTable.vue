<template>
  <div>
    <!-- Navbar will go here -->
    <div class="container">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="{
          enabled: true
        }"
      />
    </div>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  components: {
    VueGoodTable
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
<style>
.container {
  margin-left: 200px;
  margin-right: 200px;
}
</style>
