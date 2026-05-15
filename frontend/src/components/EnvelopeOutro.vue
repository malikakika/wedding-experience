<template>
  <section id="outro" class="outro-section">

    <div class="outro-content">
      <p class="outro-text">
        Une histoire commence,<br />
        une promesse s’écrit,<br />
        et un avenir se dessine.
      </p>

      <p class="signature">
        Malika ✦ Maxime
      </p>

      <button class="outro-cta" @click="scrollToTop">
        Revoir l’invitation
      </button>
    </div>

    <!-- ✉️ ENVELOPPE -->
    <div class="outro-envelope">
      <img
        src="@/assets/envelope-open-base.png"
        class="envelope-base"
        alt=""
      />

      <img
        src="@/assets/envelope-flap.png"
        class="envelope-flap"
        :class="{ closed: closed }"
        alt=""
      />
    </div>

  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const closed = ref(false)

onMounted(() => {
  // laisse le temps à la section d’apparaître
  setTimeout(() => {
    closed.value = true
  }, 800)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
<style scoped>
/* ============================= */
/* SECTION OUTRO                 */
/* ============================= */
.outro-section {
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f6f1ea 60%,
    #efe6d6 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;
}

/* ============================= */
/* TEXTE FINAL                   */
/* ============================= */
.outro-content {
  text-align: center;
  margin-bottom: 3.5rem;
}

.outro-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem;
  line-height: 1.6;
  color: #3b2f1b;
}

.signature {
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  color: #8a6a1f;
}

/* CTA */
.outro-cta {
 
  border-radius: 999px;
  border: none;
  padding: 1rem 4rem;

  background: linear-gradient(135deg, #d6b36a, #f3d58a);
  color: #3b2f1b;

  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  cursor: pointer;
  box-shadow: 0 18px 36px rgba(0,0,0,0.2);
}

/* ============================= */
/* ✉️ ENVELOPPE                 */
/* ============================= */
.outro-envelope {
  position: relative;
  width: 360px;
  max-width: 90vw;
}

/* base */
.envelope-base {
  width: 100%;
  display: block;
}

/* rabat */
.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  transform-origin: top center;
  transform: rotateX(110deg);

  transition: transform 3.8s cubic-bezier(0.16, 1, 0.3, 1);
  backface-visibility: hidden;
}

/* fermeture */
.envelope-flap.closed {
  transform: rotateX(0deg);
}

/* ============================= */
/* 📱 MOBILE                     */
/* ============================= */
@media (max-width: 768px) {
.outro-section {
  min-height: 80vh;
  
}
  .outro-text {
    font-size: 1.5rem;
  }

  .outro-envelope {
    width: 280px;
  }
}
</style>
