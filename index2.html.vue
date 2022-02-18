<template>
  <div>
    <div class="container">
      <h1>Welcome!!!!</h1>

      <form action="main.html" id="details">
        <input type="text" value="Shittu Abimbola" /><br />
        <input
          type="email"
          id="email"
          value="monnyann10@gmail.com"
          autofocus=""
        /><br />
        <input
          type="password"
          id="password"
          value="Tania1007"
          autofocus=""
        /><br />
        <input
          type="number"
          value="08065607842"
          placeholder="Phone Number"
        /><br />
        <input type="radio" name="gen_name" value="Male" />
        &nbsp; <label for="html" class="gen">Male</label>
        <input type="radio" name="gen_name" value="Female" />
        &nbsp; <label for="html" class="gen">Female</label><br />
        <input type="checkbox" id="cond" name="cond" value="condition" />
        <label for="gender">
          <a href="#">I agree to the terms &amp; conditions</a></label
        ><br />
        <button id="submit" value="Submit" type="">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
