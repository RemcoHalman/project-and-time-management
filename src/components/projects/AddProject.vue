<template>
  <div class="formholder">
    <form @submit="submitNewProject">
      <input type="text" name="Project Name" id="" placeholder="Project Name" />
      <input type="text" name="Client" id="" placeholder="Name" />
      <textarea name="Project Description" placeholder="Project Description" />
      <input type="submit" value="Add Project" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
form {
  display: grid;
  input[type="date"],
  input[type="datetime"],
  input[type="email"],
  input[type="month"],
  input[type="tel"],
  input[type="text"],
  input[type="url"],
  input[type="week"],
  select,
  textarea {
    background-color: transparent; /* Remove background fill */
    text-transform: uppercase; /* Make all placeholder text uppercase */
    border-radius: 5px; // Small curve around the edge
    border: 2px solid #ccc; /* 2px white border */
    color: #000; /* White text */
    height: 45px; /* Increase input height */
    margin: 5px 0;
    padding: 5px;
  }
}

/* Button */
form input[type="submit"],
form button[type="submit"] {
  text-transform: capitalize;
  background: #ccc;
  font-weight: normal;
  padding: 15px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: rgb(136, 136, 136);
  }
}

div.formholder {
  padding: 10px 60px;
  color: white;
  max-width: 1080px;
  margin: 1.5rem auto 0 auto;
}
</style>
