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
    <div class="container bl_ss">
      <div class="row">
        <div
          class="
            col-lg-4 col-sm-12
            d-flex
            justify-content-center
            align-items-center
            p-5
          "
        >
          <img src="@/assets/images/Group (8).png" alt="" />
          <div style="line-height: 8px; padding-left: 24px">
            <h2>1400+</h2>
            <p style="display: block; color: #febc06">Online Courses</p>
          </div>
        </div>
        <div
          class="
            col-lg-4 col-sm-12
            d-flex
            justify-content-center
            align-items-center
            p-5
          "
        >
          <img src="@/assets/images/instructor 1.png" alt="" />
          <div style="line-height: 8px; padding-left: 24px">
            <h2>1100+</h2>
            <p style="display: block; color: #febc06">Expert Instructors</p>
          </div>
        </div>
        <div
          class="
            col-lg-4 col-sm-12
            d-flex
            justify-content-center
            align-items-center
            p-5
          "
        >
          <img src="@/assets/images/XMLID_1591_.png" alt="" />
          <div style="line-height: 8px; padding-left: 24px">
            <h2>800+</h2>
            <p style="display: block; color: #febc06">Success Stories</p>
          </div>
        </div>
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
.app {
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
.bl_ss {
  box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  background-color: #fff;
  margin-top: -80px;
  margin-bottom: 128px;
}
</style>