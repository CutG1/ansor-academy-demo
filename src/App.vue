<template>
  <div id="app">
    <HeaderMenu/>
    <HeaderSection/>
  </div>
</template>

<script>
import HeaderMenu from "@/components/headerMenu.vue"
import HeaderSection from "@/components/headerSection.vue"
export default {
  name: "App",
  components: {
    HeaderMenu,
    HeaderSection
  },
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
