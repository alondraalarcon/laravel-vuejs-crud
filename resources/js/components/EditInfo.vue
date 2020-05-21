<template>
  <form v-on:submit.prevent="editInfo">
    <div class="form-group">
      <label for="exampleInputEmail1">First Name</label>
      <input type="text" class="form-control" v-model="infos.firstname" required />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Last Name</label>
      <input type="text" class="form-control" v-model="infos.lastname" required />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Address</label>
      <textarea class="form-control" rows="2" v-model="infos.address"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <router-link class="btn btn-secondary" v-bind:to="'/'">Cancel</router-link>
  </form>
</template>
<script>
export default {
  data: function() {
    return {
      infos: {
        firstname: "",
        lastname: "",
        address: ""
      }
    };
  },
  created: function() {
    let uri = "http://localhost:8000/infos/" + this.$route.params.id;
    Axios.get(uri).then(response => {
      this.infos = response.data;
    });
  },
  methods: {
    editInfo: function() {
      let uri = "http://localhost:8000/infos/" + this.$route.params.id;
      Axios.patch(uri, this.infos).then(response => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>