<template>
  <div class="row">
    <div class="float-right">
      <router-link class="btn btn-primary float-right" v-bind:to="{path: '/add-info'}">Add Info</router-link>
    </div>
    <br />
    <br />
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info,index) in listOfInfos" v-bind:key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ info.firstname}}</td>
          <td>{{ info.lastname}}</td>
          <td>{{ info.address}}</td>
          <td>
            <router-link
              class="btn btn-danger"
              v-bind:to="{name: 'ShowInfo', params: {id: info.id}}"
            >Show</router-link>
            <router-link
              class="btn btn-primary"
              v-bind:to="{name: 'EditInfo', params: {id: info.id}}"
            >Edit</router-link>
            <router-link
              class="btn btn-secondary"
              v-bind:to="{name: 'DeleteInfo', params: {id: info.id}}"
            >Delete</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      infos: ""
    };
  },
  created: function() {
    let uri = "http://localhost:8000/infos";
    Axios.get(uri).then(response => {
      this.infos = response.data;
    });
  },
  computed: {
    listOfInfos: function() {
      if (this.infos.length) {
        return this.infos;
      }
    }
  }
};
</script>