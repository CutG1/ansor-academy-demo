<template>
  <div class="app">
    <div class="empty"></div>
    <div class="appbg">
      <div class="ortaga">
        <h1>Self-Paced Learning Courses Online</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum. Urna, posuere<br />
          nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae
          sit.
        </p>
        <btn />
      </div>
    </div>
    
  </div>
</template>

<script>
import btn from "@/components/elements/btnAll.vue";
export default {
  components: {
    btn,
  },
};
</script>

<style scoped>
.app{
    position: relative;
}
.empty {
  width: 100%;
  height: 100px;
  display: none;
}
.appbg {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  background-image: url("@/assets/images/headerBg.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.54);
}
.ortaga {
  color: white;
  text-align: center;
}
</style>