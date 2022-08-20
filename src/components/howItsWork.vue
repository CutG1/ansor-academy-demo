<template>
  <div>
    <div class="container text text-center" style="margin-bottom: 128px;">
      <div>
        <h1 style="padding-bottom: 12px; font-size: 48px">How It Work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Aliquam et hendrerit euismod fusce sit.
        </p>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <label>
            <div class="back_color"></div>
            <img src="@/assets/images/Group (9).png" alt="" />
          </label>
          <h5
            style="
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              padding-top: 27px;
              padding-bottom: 16px;
            "
          >
            Learn More Online
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consecte
            tur adipiscing elit. Aliquam et hendrer
            it eui smod fusce sit.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <label>
            <div class="back_color"></div>
            <img src="@/assets/images/notes 1.png" alt="" />
          </label>
          <h5
            style="
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              padding-top: 27px;
              padding-bottom: 16px;
            "
          >
            Writing Notes
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consecte
            tur adipiscing elit. Aliquam et hendrer
            it eui smod fusce sit.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <label>
            <div class="back_color"></div>
            <img src="@/assets/images/choices 1.png" alt="" />
          </label>
          <h5
            style="
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              padding-top: 27px;
              padding-bottom: 16px;
            "
          >
            Interactive Sessions
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consecte
            tur adipiscing elit. Aliquam et hendrer
            it eui smod fusce sit.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <label>
            <div class="back_color"></div>
            <img src="@/assets/images/technical-support 1.png" alt="" />
          </label>
          <h5
            style="
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              padding-top: 27px;
              padding-bottom: 16px;
            "
          >
            Life Time Support
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consecte
            tur adipiscing elit. Aliquam et hendrer
            it eui smod fusce sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  cursor: pointer;
  transition: all ease 0.8s;
  /* background-color: white; */
    margin-left: -60px;
    margin-bottom: -20px;
    z-index: 100;
}
img:hover {
  transform: translate(10px, -10px);
  
}
.col-lg-3 {
    padding: 15px;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
}
.col-lg-3:hover {
  box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.08);
}
.back_color{
    width: 100px;
    height: 100px;
    background-color: rgb(21, 0, 128);
    /* background-color: black; */
    opacity: 0.5;
    border-radius: 100%;
    margin-top: 40px;
    box-shadow: 0px 11px 35px rgba(21, 0, 128, 0.53);
}
label div, label img{
    display: inline-block;
    vertical-align: middle;
}
</style>