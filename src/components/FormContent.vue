<template>
  <div>
    <div class="container text-center" style="margin-top: 128px;margin-bottom: 100px;color: white;">
      <div class="col-lg-8 col-md-12 offset-lg-2">
          <form class="text-center forma p-5">
            <div>
            <h1>What Our Students Say</h1>
            <p style="padding-top: 12px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat<br>
                mauris non dictumst in leo. Lorem ipsum dolor sit amet.
            </p>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Email ...">
                <btn class="btnblock"></btn>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/elements/btnAll.vue"
export default {
    comments:{
        btn
    }
};
</script>

<style scoped>
.forma{
    background: #FEBC06;
}
input{
    position: relative;
    padding: 10px 25px;
}
.btnblock{
    position: absolute;
}
</style>