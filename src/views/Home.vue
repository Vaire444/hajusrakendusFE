<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to here" />
    <ul>
      <li>
        <!-- <date-picker @date-picked="getAllDistinctServices($event)" /> -->
        <date-picker @date-added="getAllFreeServices($event)" />
      </li>
      <li>
        <!-- <service-list @date-picked="getAllDistinctServices($event)" /> -->
        <service-list />
      </li>
      <ul>
        <li>
          <free-service @date-added="getAllFreeServices($event)">
            <div
              v-for="freeServiceTime in freeServiceTimes"
              :key="freeServiceTime.serviceTime"
            >
              <p>
                Time {{ freeServiceTime.serviceTime }}
                <button>Book</button>
              </p>
              <!-- <div
        v-for="freeServiceTime in freeServiceTimes"
        :key="freeServiceTime._id"
        class="mt-3 cursor-move"
      ></div> -->

              <p>{{ freeServiceTimes.serviceTime }}</p>
            </div>
          </free-service>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import DatePicker from "@/components/DatePicker.vue";
import ServiceList from "@/components/ServiceList.vue";
import FreeService from "@/components/FreeService.vue";
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "Home",
  components: {
    HelloWorld,
    DatePicker,
    ServiceList,
    FreeService,
  },

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      serviceName: "",
      existingServiceNames: [],
      freeServiceTimes: [],
    };
  },
  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
    serviceDate: (state) => state.date,
    dateAlias: "serviceDate",
  }),

  async created() {
    await this.getAllDistinctServices();
  },

  methods: {
    async getAllDistinctServices() {
      console.log("Home getAllDistinctServices funktsioon algas");
      const getAll = await axios({
        // url: `${this.apiURL}api/serviceName`,
        url: "http://localhost:3001/api/serviceName",
        method: "GET",
      });
      this.existingServiceNames = getAll.data.allNames;
    },
    async getAllFreeServices() {
      console.log("Home getAllFreeServices funktsioon algas");
      let storeName = this.$store.state.name;
      console.log("Home " + storeName);
      let storeDate = moment(this.$store.state.date).format("YYYY-MM-DD");
      console.log("Home storeDate" + storeDate);
      const getAll = await axios({
        // url: `${this.apiURL}api/serviceName`,
        url: `http://localhost:3001/api/serviceOrder/${storeDate}/${storeName}/0`,
        // url: "http://localhost:3001/api/serviceOrder/2021-07-07/Haircut/0",
        method: "GET",
      });

      this.freeServiceTimes = getAll.data.result;
      console.log("Home " + this.freeServiceTimes);
    },
    async addName() {
      this.$emit("name-added", {
        userName: this.userName,
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 800px;
  margin: 1em auto;
}

.column-width {
  min-width: 320px;
  width: 320px;
}

.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>