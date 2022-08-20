<template>
  <div id="app">
    <HeaderMenu />
    <HeaderSection />
    <secondSection />
    <howItwork />
    <AllCourses />
    <mentorSection />
    <ComingEvents />
    <FourNumbers />
    <OurBlog />
    <FormContent/>
  </div>
</template>

<script>
import HeaderMenu from "@/components/headerMenu.vue";
import HeaderSection from "@/components/headerSection.vue";
import secondSection from "@/components/secondSection.vue";
import howItwork from "@/components/howItsWork.vue";
import AllCourses from "@/components/allCourses.vue";
import mentorSection from "@/components/mentorSection.vue";
import ComingEvents from "@/components/ComingEvents.vue";
import FourNumbers from "@/components/fourNumbers.vue";
import OurBlog from "@/components/OurBlog.vue";
import FormContent from "@/components/FormContent.vue";
export default {
  name: "App",
  components: {
    howItwork,
    secondSection,
    HeaderMenu,
    HeaderSection,
    AllCourses,
    mentorSection,
    ComingEvents,
    FourNumbers,
    OurBlog,
    FormContent
},
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
p {
  opacity: 0.8;
}
a {
  text-decoration: none !important;
}
</style>
