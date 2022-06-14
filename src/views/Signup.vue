<template>
  <div class="container">
  <h2>Sign up</h2>
  </div>
      <hr>
  <form>
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr">
      <label for="pwd">Last name:</label>
      <input type="password" class="form-control" id="pwd">
      <label for="usr">Password:</label>
      <input type="password" class="form-control" id="pwd">
  </form>
<div class="container">
    <button type="button" class="btn">Sign up</button>
</div>
</template>

<script>
export default {

}
</script>

<style>
form {
  width: 40%;
  min-width: 350px;
  top: 25%;
  transform: translate(-50%) -50%;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 20px #000000b3;
  font-family: Monsterrat;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;
}
label{
font-family: Monsterrat;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 8px;
}
button{
  display: block;
  background: #1c92d2;
  padding: 14px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
}
button:hover {
  background: beige;
  transition: 0.5s;
}
.btn{
  display: block;
  background: #1c92d2;
  padding: 8px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1px;
  margin: auto;
}
</style>