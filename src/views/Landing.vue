 vue <template>
  <div class="landing">
    <div class="welcome">
      <h1>Welcome to Twitter</h1>
    </div>
    <div class="form">
      <form @submit.prevent="signIn">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    signIn() {
      console.log(this.email);
      console.log(this.password);

      fetch('https://multipagesiteapi.herokuapp.com/signin', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          if (data.token) {
            localStorage.setItem('user', JSON.stringify(data))
          }

          this.$router.push({ name: "home" })
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>
 
 <style>
.form {
  max-width: 800px;
  margin: 0 auto;
}
</style>