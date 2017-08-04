<template lang="html">
  <!-- <div class="message-bubble"> -->
    <!-- <div class="bubble-container"> -->
    <!-- <div class="columns">
      <div class="column is-2 image-container is-64x64">
        <figure class="image">
          <img src="http://via.placeholder.com/64x64" alt="Image">
        </figure>
      </div>
      <div class="column is-10 message-container">
        <div class="notification">
          Message 1
        </div>
      </div>
    </div> -->
  <!-- </div> -->
  <!-- <div class="message-bubble">
    <div class="bubble-container">
      <div class="columns is-mobile">
        <div class="column is-2">
          <div class="image-container is-64x64">
            <figure class="image">
              <img src="http://via.placeholder.com/64x64" alt="Image">
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="message-container">
            <div class="notification">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->


  <!-- With Table -->
  <!-- <div class="bubble-container">
    <div class="row">
        <div class="image-container">
          <figure class="image is-48x48">
            <img src="http://dl.profile.line-cdn.net/0hzdJzaD2DJUt3AwutLdRaHEtGKyYALSMDDzU9KFdWcnNTYzcdSGM-fwFUL3JfYWFNQ2JoeFoDKSxT" alt="Image">
          </figure>
        </div>
        <div class="message-container">
          <div class="message">
            Message 1
          </div>
        </div>
    </div>
  </div> -->

  <div class="bubble-container">
    <div class="row">
      <div class="inversePair">
        <div class="image-container">
          <figure class="image is-48x48">
            <img src="http://dl.profile.line-cdn.net/0hzdJzaD2DJUt3AwutLdRaHEtGKyYALSMDDzU9KFdWcnNTYzcdSGM-fwFUL3JfYWFNQ2JoeFoDKSxT" alt="Image">
          </figure>
        </div>
      </div>
      <div class="inversePair">
        <div class="message-container">
          <div class="message">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'message-bubble'
}
</script>

<style lang="scss" scoped>
$message: #3C4F8F;
$white: #FFFFFF;
$online-image: #3C4F8F;
// $is-admin: #D3A849;

.inversePair {
    // border: 1px solid black;
    // background: grey;
    display: inline-block;
    // position: relative;
    // height: 100px;
    text-align: center;
    // line-height: 100px;
    vertical-align: middle;
}



.image-container:before {
    content: ' ';
    /* left: 0; */
    /* top: 0; */
    /* right: 0; */
    /* bottom: 0; */
    margin-left: -26px;
    margin-top: -2px;
    position: absolute;
    z-index: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    /* background-color: #FFE19F; */
    border: 2px solid #FFE19F;
}

.message-container {
    overflow: hidden;
    border-radius: 2px;
    margin-left: -24px;
}

// .message-container:before {
//     content:' ';
//     left: -58px;
//     top: -7px;
//     position: absolute;
//     width: 114px; /* 5px gap, 1px border */
//     height: 114px;
//     border-radius: 57px;
//     background-color: black;
// }

.bubble-container {
    display: table;
    // border: 1px solid;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
    > div.row {
        display: table-row;
        > div {
            display: table-cell;
            // border:1px solid;
            &:nth-child(1) {
                vertical-align: middle;
            }
            &:nth-child(2) {
                vertical-align: middle;
            }
        }
    }
}
// .message-bubble {
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: 10px;
//     border: 1px solid;
// }
// .bubble-container {
//     min-height: 72px;
// }
// .image-container {
//     z-index: 1000;
//     border-radius: 50%;
// }
.image {
    border-radius: 50%;
    overflow: hidden;
    left: 0;
    right: 0;
    border: 2px solid $online-image;
}
// .is-admin {
//     background-color: $is-admin;
//     margin-left: 20px;
// }
.message {
    background-color: $message;
    color: $white;
    text-align: justify;
    font-size: 14px;
    padding: 0.25rem 0.75rem 0.25rem 30px;
    // border-left: none;
    // background-image: -webkit-radial-gradient(-40px 50%, circle closest-corner, #FFE19F 0, #FFE19F 42px, transparent 0, #3C4F8F 57px);
}
// .message:before {
//     content:' ';
//     left: -58px;
//     top: -7px;
    // position: absolute;
    // width: 114px; /* 5px gap, 1px border */
    // height: 114px;
    // border-radius: 57px;
//     background-color: black;
// }
// .notification:not(:last-child) {
//     margin-bottom: 0.5rem;
// }
</style>
