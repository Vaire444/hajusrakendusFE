<template>
  <div>
    <HelloWorld msg="Welcome to here!" />
    <ul>
      <li>
        <date-picker @date-added="getAllFreeServices($event)" />
      </li>
    </ul>
    <ul>
      <li>
        <service-list @name-added="getAllFreeServices($event)" />
      </li>
      <ul>
        <li>
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            {{ $moment(serviceDate).format("DD.MM.YYYY") }} {{ name }}
          </p>
        </li>
      </ul>

      <ul>
        <li>
          <div
            v-for="freeServiceTime in freeServiceTimes"
            :key="freeServiceTime.id"
          >
            {{ freeServiceTime.serviceTime }}
            <button>Book</button>
            <p></p>
          </div>
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
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "Home",
  components: {
    HelloWorld,
    DatePicker,
    ServiceList,
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
      const getAll = await axios({
        url: "http://localhost:3001/api/serviceName",
        method: "GET",
      });
      this.existingServiceNames = getAll.data;
    },
    async getAllFreeServices() {
      let storeName = this.$store.state.name;
      let storeDate = moment(this.$store.state.date).format("YYYY-MM-DD");
      const getAll = await axios({
        url: `http://localhost:3001/api/serviceOrder/${storeDate}/${storeName}/0`,

        method: "GET",
      });
      const FreeTimes = getAll.data.result;
      this.freeServiceTimes = FreeTimes;
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