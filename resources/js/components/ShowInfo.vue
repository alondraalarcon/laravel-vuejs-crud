<template>
  <div class="row-lg-12">
    <div class="card">
      <div class="card-header bg-dark text-white">View Information</div>
      <div class="card-body">
        <h5 class="card-title">{{info.firstname}}&nbsp;{{info.lastname}}</h5>
        <p class="card-text">{{info.address}}</p>
      </div>
      <div class="card-footer text-muted">
        <router-link class="btn btn-secondary float-right" v-bind:to="'/'">Back</router-link>
      </div>
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
  }
};
</script>