<template>
  <div class="game-container">
    <div
      class="block"
      :style="{ transform: `translateY(${blockPosition}px)` }"
      @click="jumpIfCan"
    >
      点击我跳跃
    </div>
    <div v-if="showImage" class="image-container" @click="hideImage">
      <img src="../../public/牢大.jpg" alt="Jump Image" width="408" height="612">
    </div>
    <br>
    <div>点击次数: {{ clickCount }}</div>
  </div>
</template>

<script>
export default {
  name: 'JumpingBlockGame',
  data() {
    return {
      blockPosition: 0,
      clickCount: 0,
      isJumping: false,
      jumpHeight: -50,
      jumpDuration: 300,
      showImage: false, // 控制图片是否显示
    };
  },
  methods: {
    jump() {
       this.isJumping = true;
      const startTime = Date.now();

      const animateJump = () => {
        if (this.isJumping) {
          const currentTime = Date.now();
          const timeElapsed = currentTime - startTime;
          const progress = timeElapsed / this.jumpDuration;

          // 使用ease-out效果模拟跳跃动画
          this.blockPosition = this.jumpHeight * ((progress - 1) * progress * progress + 1);

          if (timeElapsed < this.jumpDuration) {
            requestAnimationFrame(animateJump);
          } else {
            this.blockPosition = 0; // 重置方块位置
            this.isJumping = false; // 标记跳跃结束
          }
        }
      };

      animateJump();
    },
    jumpIfCan() {
      if (!this.isJumping) {
        this.clickCount++;
        if (this.clickCount === 24) {
          this.showImage = true; // 显示图片
        }
        this.jump();
      }
    },
    hideImage() {
      this.showImage = false; // 隐藏图片
    },
  },
};
</script>

<style scoped>
.game-container {
   position: relative;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

.block {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  border-radius: 20px;
  color: white;
  line-height: 100px;
  margin-left: auto;
  margin-top:50px;
  margin-right: auto;
  text-align: center;
  border: 2px solid black;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-container {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%); /* 居中图片 */
}

.image-container img {
  display: block; /* 防止图片下方有额外的空间 */
}
</style>