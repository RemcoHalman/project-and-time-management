<template>
  <div class="project">
    <h3>{{ projectName }}</h3>
    <p>Opdrachtgever: {{ client }}</p>
    <p>Projectomschrijving:</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["projectName", "client", "description"],
};
</script>

<style lang="scss" scoped>
.project {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  flex: 0 0 calc(100% / 3 - (8px * 4));
  p {
    text-align: left;
    padding: 5px;
  }
}
</style>
