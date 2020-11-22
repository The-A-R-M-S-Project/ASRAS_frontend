const state = {
  timeTable: [
    {
      id: "1",
      day: "Monday",
      course: "Computer Engineering Ethics",
      courseCode: "CMP1101",
      room: "M1",
      lecturer: "Gordon Ariho",
      duration: "8:00a.m - 10:00a.m"
    },
    {
      id: "2",
      day: "Monday",
      course: "Communication Skill",
      courseCode: "TEC1101",
      room: "M2",
      lecturer: "John Kagaha",
      duration: "8:00a.m - 10:00a.m"
    },
    {
      id: "3",
      day: "Tuesday",
      course: "Electronics I",
      courseCode: "CMP1102",
      room: "M2",
      lecturer: "Josephine Kakande",
      duration: "8:00a.m - 10:00a.m"
    },
    {
      id: "4",
      day: "Monday",
      course: "Engineering Math I",
      courseCode: "EMT1103",
      room: "M1",
      lecturer: "Gordon Ariho",
      duration: "10:00a.m - 12:00p.m"
    },
    {
      id: "5",
      day: "Tuesday",
      course: "Sociology For Technology",
      courseCode: "CMP1201",
      room: "M1",
      lecturer: "John kagaha",
      duration: "10:00a.m - 12:00p.m"
    },
    {
      id: "6",
      day: "Monday",
      course: "Discrete Mathematics",
      courseCode: "CMP2101",
      room: "M4",
      lecturer: "Sheila Mugala",
      duration: "8:00a.m - 10:00a.m"
    },
    {
      id: "7",
      day: "Tuesday",
      course: "Embeddes Systems",
      courseCode: "CMP3101",
      room: "M1",
      lecturer: "Maximus Byamukama",
      duration: "8:00a.m - 10:00a.m"
    },
    {
      id: "8",
      day: "Tuesday",
      course: "Object Oriented Programming",
      courseCode: "CMP2101",
      room: "M5",
      lecturer: "Carol Ovon",
      duration: "8:00a.m - 10:00a.m"
    }
  ]
};

const getters = {
  getTimeTable: state => state.timeTable
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
