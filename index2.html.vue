<template>
  <div>
    <h1 class="tittle" id="test">Shittu Abimbola Muibat</h1>
    <form action="" id="details">
      <input type="text" value="Shittu Abimbola" placeholder="Name" />
      <input type="email" value="monnyann10@gmail.con" placeholder="Email" />
      <input type="password" value="adfghj67" placeholder="Password" />
      <input type="number" value="08065607842" placeholder="Phone Number" />
      <input type="radio" id="gender" name="fav_language" value="Male" />
      &nbsp; <label for="html">Male</label>
      <input type="radio" id="gender" name="fav_language" value="Female" />
      &nbsp; <label for="html">Female</label><br />
      <input type="checkbox" id="gender" name="male" value="male" />
      <label for="gender">
        <a href="#">I agree to the terms &amp; conditions</a></label
      ><br />
      <button type="button">Submit</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
input {
  padding: 0.9rem 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid teal;
  text-align: center;
}
input[type="checkbox"] {
  display: inline;
}
input[type="radio"] {
  display: inline;
}
button {
  outline: none;
  border-style: none;
  padding: 1rem 1.8rem;
  border: 1px solid teal;
  border-radius: 10px;
  color: teal;
  margin: 1.3rem 5rem;
  background-color: transparent;
}
button:hover {
  background-color: teal;
  color: #fff;
}
</style>
