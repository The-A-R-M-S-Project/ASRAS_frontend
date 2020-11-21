<template>
  <div>
    <div class="row">
      <AdminTopNav />
    </div>
    <div class="row mt-5">
      <div class="col-5">
        <div class="card p-5 m-5">
          <form style="width: 100%">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label"
                >Course title:</label
              >
              <div class="col-sm-7">
                <input v-model="request.courseTitle" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label"
                >Code:</label
              >
              <div class="col-sm-7">
                <input v-model="request.code" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label"
                >Capacity:</label
              >
              <div class="col-sm-7">
                <input v-model="request.capacity" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label"
                >Lecturer:</label
              >
              <div class="col-sm-7">
                <input v-model="request.lecturer" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-5 col-form-label"
                >Request:</label
              >
              <div class="col-sm-7">
                <select
                  v-model="request.request"
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option>Weekend</option>
                  <option>Afternoon</option>
                  <option>Morning</option>
                  <option>Neither Monday nor Tuesday</option>
                </select>
              </div>
            </div>
            <div style="width: 100%; text-align: center">
              <button
                @click="handleSubmit"
                class=" btn btn-primary mt-3"
                style="width: 100px;"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-6 mt-5 ml-4 pt-2 display">
        <div v-for="lecture in Lectures" :key="lecture.code">
          <div class="">
            <div class="row">
              <div class="col-5">Course title</div>
              <div class="col-7">{{ lecture.courseTitle }}</div>
            </div>
            <div class="row">
              <div class="col-5">Code</div>
              <div class="col-7">{{ lecture.code }}</div>
            </div>
            <div class="row">
              <div class="col-5">Capacity</div>
              <div class="col-7">{{ lecture.capacity }}</div>
            </div>
            <div class="row">
              <div class="col-5">Lecturer</div>
              <div class="col-7">{{ lecture.lecturer }}</div>
            </div>
            <div class="row">
              <div class="col-5">Request</div>
              <div class="col-7">{{ lecture.request }}</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import AdminTopNav from "@/components/AdminTopNav";
import { mapGetters } from "vuex";

export default {
  name: "AdminPage",
  components: {
    // Navigation
    AdminTopNav
    // AdminNav
  },
  data() {
    return {
      request: {
        courseTitle: "",
        code: "",
        capacity: "",
        lecturer: "",
        request: ""
      },
      Lectures: []
    };
  },
  computed: mapGetters(["getAllLectures"]),
  created() {
    console.log("lectures ", this.getAllLectures);
    this.Lectures = this.getAllLectures;
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const data = this.request;
      this.$store.dispatch("addLecture", data).then(() => {
        console.log(this.getAllLectures);
        this.request = {}
      });
    }
  }
};
</script>

<style lang="css" scoped>
.circle-tile {
  margin-bottom: 15px;
  text-align: center;
}
.display {
  height: 80vh;
  border: 1px solid gray;
  border-radius: 10px;
  overflow-y: scroll;
}
</style>

