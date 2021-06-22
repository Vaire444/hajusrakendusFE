<template>
  <div
    class="bg-white shadow rounded px-3 pt-3 pb-5 border-2"
    :class="'border-400'"
  >
    <div class="flex justify-between">
      <p>
        Time to go
        <button>Book</button>
      </p>
      <!-- <p>{{ freeServiceTimes.freeServiceTime }}</p> -->
      <!-- </div> -->
    </div>
  </div>
</template>
 <script>
// import axios from "axios";
import { mapState } from "vuex";
// import moment from "moment";
// import ServiceCard from "./ServiceCard.vue";
export default {
  name: "FreeService",

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      // serviceName: "",
      // existingServiceNames: [],

      // freeServiceTimes: [],
    };
  },
  components: {
    // ServiceCard,
  },
  props: {
    freeServiceTimes: {
      Type: String,
    },
  },
  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
    serviceDate: (state) => state.date,
    dateAlias: "serviceDate",
  }),

  // async created() {
  //   await this.getAllFreeServices();
  // },

  // methods: {
  //   async getAllFreeServices() {
  //     let storeName = this.$store.state.name;
  //     console.log(storeName);
  //     let storeDate = moment(this.$store.state.date).format("YYYY-MM-DD");
  //     console.log("funktsioon algas");
  //     const getAll = await axios({
  //       // url: `${this.apiURL}api/serviceName`,
  //       url: `http://localhost:3001/api/serviceOrder/${storeDate}/${storeName}/0`,
  //       // url: "http://localhost:3001/api/serviceOrder/2021-07-07/Haircut/0",
  //       method: "GET",
  //     });

  //   this.freeServiceTimes = getAll.data.result;
  //   console.log(this.freeServiceTimes);
  // },
  // },
};
</script>