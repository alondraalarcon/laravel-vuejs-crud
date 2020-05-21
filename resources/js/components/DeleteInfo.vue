<template>
  <div class="row-lg-12">
    <div class="card">
      <div class="card-header bg-dark text-white">Are you sure you want to delete this information?</div>
      <form v-on:submit.prevent="deleteInfo">
        <div class="card-body">
          <h5 class="card-title">{{info.firstname}}&nbsp;{{info.lastname}}</h5>
          <p class="card-text">{{info.address}}</p>
          <button type="submit" class="btn btn-primary">Submit</button>
          <router-link class="btn btn-secondary" v-bind:to="'/'">Back</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      info: {
        firstname: "",
        lastname: "",
        address: ""
      }
    };
  },
  created: function() {
    let uri = "http://localhost:8000/infos/" + this.$route.params.id;
    Axios.get(uri).then(response => {
      this.info = response.data;
    });
  },
  methods: {
    deleteInfo: function() {
      let uri = "http://localhost:8000/infos/" + this.$route.params.id;
      Axios.delete(uri, this.info).then(response => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>