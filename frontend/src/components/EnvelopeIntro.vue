

<template>
<div
  class="container"
  :class="{ released }"
  @click="!opened && openEnvelope()"
>
    <div class="envelope-wrapper">
      <!-- 🎬 VIDEO DANS L’ENVELOPPE -->
      <VideoInvitation :visible="flapOpened" />

      <!-- CTA QUI SORT DE L’ENVELOPPE -->
<div
  v-if="flapOpened"
  class="envelope-cta"
  @click.stop="goNext"
>
  Découvrez notre histoire 
</div>

      <!-- ENVELOPPE FERMÉE -->
      <img
        v-if="!opened"
        :src="envelopeClosed"
        class="layer"
        alt="Enveloppe fermée"
      />

      <!-- BASE OUVERTE -->
      <img
        v-if="opened"
        :src="openBaseSrc"
        class="layer"
        alt="Base ouverte"
      />

      <!-- RABAT -->
      <img
        v-if="opened"
        :src="envelopeFlap"
        class="flap"
        :class="{ opened: flapOpened }"
        alt="Rabat"
      />
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import VideoInvitation from '@/components/VideoInvitation.vue'

import envelopeClosed from '@/assets/envelope-closed.png'
import envelopeOpenBase from '@/assets/envelope-open-base.png'
import envelopeOpenMobile from '@/assets/envelope-open-mobile.png'
import envelopeFlap from '@/assets/envelope-flap.png'

const opened = ref(false)
const flapOpened = ref(false)
const isMobile = ref(false)
const router = useRouter()
const released = ref(false)


/* 🔑 Détection mobile propre */
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)

  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

/* 🔑 Image dynamique */
const openBaseSrc = computed(() =>
  isMobile.value ? envelopeOpenMobile : envelopeOpenBase
)

const openEnvelope = () => {
  if (opened.value) return

  opened.value = true

  requestAnimationFrame(() => {
    setTimeout(() => {
      flapOpened.value = true
    }, 450)
  })
}

const goNext = () => {
  document.body.style.overflow = 'auto'

  // 🔑 libère l’enveloppe du mode fixed
  released.value = true

  requestAnimationFrame(() => {
    const target = document.getElementById('histoire')
    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}






</script>

<style scoped>
/* ============================= */
/* CONTENEUR GLOBAL              */
/* ============================= */
.container {
  position: fixed;
  inset: 0;
  background: #f6f1ea;
  cursor: pointer;
  perspective: 2400px;
  overflow: hidden;
  z-index: 10;
}
.container.released {
  position: relative; 
  height: 100vh;
}
/* ============================= */
/* WRAPPER                       */
/* ============================= */
.envelope-wrapper {
  position: absolute;
  inset: 0;
}

/* ============================= */
/* IMAGES DESKTOP                */
/* ============================= */
.layer {
  position: absolute;
  inset: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;
  object-position: center;
}

.layer {
  pointer-events: none;
}


/* ============================= */
/* RABAT                         */
/* ============================= */
.flap {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: auto;

  object-fit: contain;
  object-position: top center;

  transform-origin: top center;
  transform: rotateX(0deg);

  transition: transform 4.8s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 6;

  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}

.flap {
  pointer-events: none;
}


.flap.opened {
  transform: rotateX(105deg) translateZ(140px);
}

/* ============================= */
/* TEXTE                         */
/* ============================= */
.hint {
  position: fixed;
  bottom: 2rem;
  width: 100%;
  text-align: center;

  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  color: #ffffff;
  opacity: 0.7;
  z-index: 10;
}

/* ============================= */
/* CTA QUI SORT DE L’ENVELOPPE   */
/* ============================= */
.envelope-cta {
  position: absolute;
  left: 50%;
  bottom: 7%;

  transform: translate(-50%, 32px);
  opacity: 0;

  padding: 0.75rem 2.2rem;
  border-radius: 999px;

  background: linear-gradient(135deg, #d6b36a, #f3d58a);
  color: #3b2f1b;

  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  cursor: pointer;

  /* 🔑 CLÉ ABSOLUE */
  z-index: 50;
  pointer-events: auto;

  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);

  animation: ctaReveal 2.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.6s;
}

/* Animation douce */
@keyframes ctaReveal {
  from {
    opacity: 0;
    transform: translate(-50%, 36px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -40px);
  }
}



/* ============================= */
/* 📱 MOBILE — LAYOUT IDENTIQUE */
/* ============================= */

@media (max-width: 768px) {

  :global(body) {
    overflow-x: hidden;
  }

  .histoire-section {
    overflow-x: hidden;
  }

  .histoire-layout {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .container {
    perspective: 1600px;
  }
    .container.released {
    height: auto;
    min-height: 100svh;
  }

  .envelope-wrapper {
    inset: auto;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 92vw;
    max-width: 360px;
    aspect-ratio: 3 / 2.6;

    position: absolute;
  }

  /* Images enveloppe */
  .layer {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Rabat */
  .flap {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .flap.opened {
    transform:
      rotateX(90deg)
      translateZ(70px);
  }

  /* CTA */
  .envelope-cta {
  bottom: -10%;

  /* largeur contrôlée */
  min-width: 90%;
  max-width: 90%;

  /* centre le texte */
  text-align: center;

  /* empêche le retour à la ligne */
  white-space: nowrap;

  /* padding horizontal plus large */
  padding: 1rem 1.4rem;

  font-size: 0.65rem;
  letter-spacing: 0.12em;

  box-sizing: border-box;
}


  /* Hint */
  .hint {
    bottom: 1rem;
    font-size: 0.6rem;
    letter-spacing: 0.14em;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  .wax-seal {
    max-width: 140px;
  }

  .pancarte-wrapper {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .pancarte {
    width: 100%;
    max-width: 100%;
  }

  .pancarte-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  /* 🔑 centre sans dépasser */
  padding: 0;
}

.pancarte {
  width: 100%;
  max-width: calc(100vw - 2rem);
  margin: 0 auto;

  /* 🔑 shadow safe */
  box-sizing: border-box;
}
  /* 🔑 FIX CRITIQUE */
  .layer,
  .flap {
    width: 100% !important;
    max-width: 100%;
  }

  /* supprime toute trace de vw */
  .layer {
    left: 0;
    right: 0;
  }

}




</style>
