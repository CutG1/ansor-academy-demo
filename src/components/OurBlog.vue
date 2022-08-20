<template>
  <div>
    <div class="container" style="margin-top: 128px">
      <div class="title">
        <h1>Our Latest Blog</h1>
        <p style="line-height: 24.8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Amet, vestibulum euismod nullam elementum.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-12 p-5 text-center">
          <div class="mentors">
            <img
              src="@/assets/images/linkedin-sales-solutions-YDVdprpgHv4-unsplash 1.png"
              alt=""
              class="img-fluid"
            />
            <div style="padding: 32px; text-align: left !important">
              <h3
                style="
                  font-size: 20px !important;
                  padding-bottom: 20px;
                  line-height: 26.04px;
                "
              >
                Product Marketing Creative Camping Brand Image
              </h3>
              <p style="font-size: 13px">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <h5 style="color: #febc06">Read More...</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 p-5 text-center">
          <div class="mentors">
            <img
              src="@/assets/images/beci-harmony-OhYQoFi8laE-unsplash 2.png"
              alt=""
              class="img-fluid"
            />
            <div style="padding: 32px; text-align: left !important">
              <h3
                style="
                  font-size: 20px !important;
                  padding-bottom: 20px;
                  line-height: 26.04px;
                "
              >
                Product Marketing Creative Camping Brand Image
              </h3>
              <p style="font-size: 13px">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <h5 style="color: #febc06">Read More...</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 p-5 text-center">
          <div class="mentors">
            <img
              src="@/assets/images/windows-p74ndnYWRY4-unsplash 1.png"
              alt=""
              class="img-fluid"
            />
            <div style="padding: 32px; text-align: left !important">
              <h3
                style="
                  font-size: 20px !important;
                  padding-bottom: 20px;
                  line-height: 26.04px;
                "
              >
                Product Marketing Creative Camping Brand Image
              </h3>
              <p style="font-size: 13px">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <h5 style="color: #febc06">Read More...</h5>
            </div>
          </div>
        </div>
      </div>
      <btn class="text-center">View All</btn>
    </div>
  </div>
</template>

<script>
import btn from "@/components/elements/btnAll.vue";
export default {
    components:{
        btn
    }
};
</script>

<style>
.title {
  text-align: center;
}
.mentors {
  background: #ffffff;
  box-shadow: 0px 11px 55px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  text-align: center;
}
</style>