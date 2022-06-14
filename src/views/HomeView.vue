<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-3 homeColumn">
        <UserCard :userInfo="userInfo" />
      </div>
      <div class="col-lg-9 homeColumn2">
        <CreatePost :posts="posts" @postTweet="postTweet" :userInfo="userInfo" />
        <Feed :posts="posts" @removePost="removePost" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CreatePost from "../components/CreatePost.vue";
import UserCard from "../components/UserCard.vue";
import Feed from "../components/Feed.vue";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
      user: null,
      userInfo: null
    };
  },
  components: {
    CreatePost,
    UserCard,
    Feed,
  },
  methods: {
    postTweet(post) {
      try {
        if (post.post === "" || post.user === '') throw "Input required";
        this.posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(this.posts))
      } catch (error) {
        alert(error);
      }
    },
    removePost(index) {
      this.posts.splice(index, 1)
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    if (!this.user) {
      this.$router.push({ name: "Landing" });
    }
    if (this.user) {
      fetch(`https://multipagesiteapi.herokuapp.com/user/${this.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data));
        });

    }
     this.posts = JSON.parse(localStorage.getItem("posts"))
      ? JSON.parse(localStorage.getItem("posts"))
      : [];


  },
  computed: {
    userInfo: () => {
      return JSON.parse(localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null
    }
  }
};




</script>
<style>

.home {
  margin: 2rem 5rem;
}
</style>
