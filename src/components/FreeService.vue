<template>
  <div class="flex justify-between">
    <div>
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ $moment(serviceDate).format("DD.MM.YYYY") }} {{ name }}
      </p>
    </div>
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
  </div>
</template>
 <script>
// import axios from "axios";
import { mapState } from "vuex";
// import moment from "moment";
// import ServiceCard from "./ServiceCard.vue";
export default {
  name: "FreeService",
  components: {
    // ServiceCard,
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

  //     this.freeServiceTimes = getAll.data.result;
  //     console.log(this.freeServiceTimes);
  //   },
  // },
};
</script>