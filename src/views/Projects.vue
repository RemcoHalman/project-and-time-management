<template>
  <h1 class="header">This is the Projects page</h1>
  <div class="projects">
    <list-projects></list-projects>
  </div>
  <add-project></add-project>
</template>

<script>
import AddProject from "../components/projects/AddProject.vue";
import ListProjects from "../components/projects/ListProjects.vue";

export default {
  name: "Projects",
  title: "Projects",
  components: { ListProjects, AddProject },
};
</script>
