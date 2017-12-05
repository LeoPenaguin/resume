<template>
  <div class='nav-button'>
    <div class='nav-button-bar'></div>
  </div>
</template>

<script>
export default {
  name: 'NavButton'
}
</script>

<style lang="scss">
.nav-button {
  position: fixed;
  top: 10px;
  left: -100px;
  z-index: 900;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(0, 230, 255, 0.5) 0%, rgba(0, 96, 167, 0.8) 100%);
  padding: 15px;
  border-radius: 5px;

  .nav-button-bar {
    position: absolute;
    width: 30px;
    height: 5px;
    background: #fff;
    border-radius: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.5s;

    &:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 5px;
      background: #fff;
      border-radius: 5px;
      top: -10px;
      transition: transform 0.5s;
    }

    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 5px;
      background: #fff;
      border-radius: 5px;
      top: 10px;
      transition: transform 0.5s;
    }
  }
}
</style>
