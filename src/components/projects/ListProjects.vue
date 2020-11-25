<template>
  <div class="projects">
    <project-item
      v-for="project in projectList"
      :key="project.id"
      :projectName="project.name"
      :client="project.client"
      :description="project.description"
    ></project-item>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "Project List",
  components: {
    ProjectItem,
  },
  data() {
    return {
      projectList: [
        {
          id: "p1",
          name: "Frontend Engineers",
          client: "Test 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum erat vitae massa elementum vulputate. Ut imperdiet purus ipsum, in dignissim sem rutrum sit amet. Nunc vehicula maximus orci efficitur mollis. Fusce quis orci non sapien tristique dictum. Mauris convallis, libero vitae egestas convallis",
        },
        {
          id: "p2",
          name: "Backend Engineers",
          client: "Test 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum erat vitae massa elementum vulputate. Ut imperdiet purus ipsum, in dignissim sem rutrum sit amet. Nunc vehicula maximus orci efficitur mollis. Fusce quis orci non sapien tristique dictum. Mauris convallis, libero vitae egestas convallis",
        },
        {
          id: "p3",
          name: "Client Consulting",
          client: "Test 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum erat vitae massa elementum vulputate. Ut imperdiet purus ipsum, in dignissim sem rutrum sit amet. Nunc vehicula maximus orci efficitur mollis. Fusce quis orci non sapien tristique dictum. Mauris convallis, libero vitae egestas convallis",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  width: 1080px;
}
</style>
