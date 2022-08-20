<template>
  <div>
    <div class="container" style="padding-bottom: 128px">
      <div class="row">
        <div class="col-lg-5 offset-lg-1 col-sm-12 string_s order-1">
          <h1>Find Your Course That Makes Bright Future</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            at diam magnis faucibus et faucibus gravida. malesuada fauci bus
            iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor,
            vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam
            nisi,
          </p>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            hendrerit euismod fusce sit.
          </h5>
          <btn>Learn More</btn>
        </div>
        <div class="col-lg-6 col-sm-12 order-0">
          <div class="bg_rasm">
            <img
              src="@/assets/images/pexels-monstera-6238005 1.png"
              class="img-fluid"
              alt=""
            />
            <span class="sp">
              <img src="@/assets/images/play 1.png" alt="" />
            </span>
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
@media only screen and (max-width: 1200px) {
  h1 {
    font-size: 32px !important;
    line-height: 30px !important;
  }
  .string_s p {
    padding-top: 5px !important;
    margin: 0 !important;
    border-bottom: 1px solid #c2c2c2;
  }
  .string_s h5 {
    padding-bottom: 10px !important;
    padding-top: 0px !important;
  }
}
.string_s h1 {
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
}
.string_s p {
  padding-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
}
.string_s h5 {
  padding-top: 16px;
  padding-bottom: 32px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}
.bg_rasm {
  position: relative;
}
.sp {
  position: absolute;
  top: 45%;
  left: 45%;
  background-color: white;
  border-radius: 100%;
  padding: 20px;
}
.sp img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>