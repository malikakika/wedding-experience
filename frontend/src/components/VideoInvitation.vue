<template>
  <div
    class="video-wrapper"
    :class="{ visible }"
  >
    <video
      src="/invitation.mp4"
      autoplay
      muted
      loop
      playsinline
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<style scoped>
.video-wrapper {
  position: absolute;
  left: 50%;
  bottom: 10%;

  transform: translate(-50%, 40px) scale(0.92);
  opacity: 0;

  width: 80%;
  max-width: 360px;
  aspect-ratio: 9 / 16;

  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);

  transition:
    transform 2.6s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1.6s ease;

  pointer-events: none;
  z-index: 2;
}

.video-wrapper.visible {
  opacity: 1;
  transform: translate(-50%, -90px) scale(1);
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .video-wrapper {
    width: 88%;
    transform: translate(-50%, 30px) scale(0.95);
  }

  .video-wrapper.visible {
    transform: translate(-50%, -60px) scale(1);
  }
}
</style>
