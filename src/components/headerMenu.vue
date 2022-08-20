<template>
  <div>
    <header>
      <input type="checkbox" name="" id="chk1" />
      <div class="logo"><h1>Ansor IT-Academy</h1></div>
      <div class="search-box"></div>
      <ul>
        <li class="nav-links"><a href="#">Home</a></li>
        <li class="nav-links"><a href="#">Courses</a></li>
        <li class="nav-links"><a href="#">Page</a></li>
        <li class="nav-links"><a href="#">Blog</a></li>
        <li class="nav-links"><a href="#">Contact</a></li>
        <!-- <li> -->
          <li class="nav-links"><a href="#">Sign In</a></li><br>
          <button class="bs">Sign Up</button>
        <!-- </li> -->
      </ul>
      <div class="menu">
        <label for="chk1">
          <i class="fa fa-bars"></i>
        </label>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}
body {
  background: white !important;
  background-size: cover;
  height: 100vh;
  background-position: center;
}
header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;
  box-shadow: 0 0 10px rgb(228, 228, 228);
  background: white;
}
button{
  padding: 5px 30px;
}
.bf {
  background: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 20px !important;
  transition: all ease 0.7s;
}
.bf:hover {
  border-radius: 4px !important;
  background-color: #FEBC06;
  border: 2px solid #FEBC06;
  color: white;
}
.bs {
  background-color: #FEBC06;
  border: none;
  outline: none;
  color: white;
  margin-left: 20px;
}
#chk1 {
  display: none;
}

i {
  color: #000;
  cursor: pointer;
}
header .logo {
  flex: 1;
  color: black;
  margin-left: 50px;
  text-transform: uppercase;
  font-size: 15px;
}
header .logo h1 {
  font-size: 28px;
  cursor: pointer;
}
header ul {
  flex: 2;
  display: flex;
  justify-content: space-evenly;
}
header ul li {
  list-style: none;
  display: flex;
}
.nav-links {
  display: block;
  padding-top: 8px;
}
header ul li a {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 15px;
}
header ul li a:hover {
  border-bottom: 2px solid cadetblue;
}
header .menu {
  font-size: 2.5em;
  display: none;
}
@media (max-width: 1100px) {
  .search-box button {
    position: absolute;
  }
  header ul {
    box-shadow: -10px 0px 10px 1px #e9e9e9;
    position: fixed;
    top: 100px;
    right: -100%;
    background: white;
    height: calc(100vh - 100px);
    width: 70%;
    flex-direction: column;
    align-items: center;
    transition: right 0.5s linear;
  }
  button{
    display: block;
    padding: 5px 10px;
  }
  header .menu {
    display: block;
    width: 100px;
    text-align: center;
  }
  #chk1:checked ~ ul {
    right: 0;
  }
}
@media (max-width: 430px){
  header .logo h1{
    font-size: 18px;
  }
}
</style>