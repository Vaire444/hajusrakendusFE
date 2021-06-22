<template>
  <div class="bg-white shadow border-2">
    <div class="flex justify-between">
      <p>
        {{ freeServiceTimes }}
      </p>
      <p>
        <button>Book a service</button>
        testintestin
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
    };
  },
  props: {
    serviceTimes: {
      default: () => ({}),
    },
  },
};
</script>


