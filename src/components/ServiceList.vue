
<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="hello">
        <select
          v-model="serviceName"
          class="form-control"
          @change="
            getAllDistinctServices(), $store.commit('setName', serviceName);
            addName();
          "
        >
          <option disabled selected value="">Please select a service</option>
          <option
            v-for="existingServiceName in existingServiceNames"
            :key="existingServiceName.serviceName"
          >
            {{ existingServiceName.serviceName }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,

      serviceName: "",

      existingServiceNames: [],
    };
  },
  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
  }),

  async created() {
    await this.getAllDistinctServices();
  },

  methods: {
    async getAllDistinctServices() {
      const getAll = await axios({
        // url: `${this.apiURL}api/serviceName`,
        url: "http://localhost:3001/api/serviceName",
        method: "GET",
      });
      this.existingServiceNames = getAll.data.allNames;
      // console.log("ServiceList" + this.existingServiceNames);
    },
    async addName() {
      this.$emit("name-added");
    },
  },
};
</script>
<style scoped>
.border-gray {
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  border-radius: 0;
  height: 300;
}
</style>