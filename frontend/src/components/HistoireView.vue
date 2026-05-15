<template>
  <section id="histoire" class="histoire-section">

    <!-- 🕯️ Tampon -->
    <img
      src="@/assets/tampon.png"
      alt="Sceau d’amour"
      class="wax-seal"
    />

    <!-- 🔥 LAYOUT 2 COLONNES -->
    <div class="histoire-layout">

      <!-- ===================== -->
      <!-- 📖 TEXTE À GAUCHE     -->
      <!-- ===================== -->
      <div class="content">
        <h2>Notre histoire</h2>

        <p>Deux chemins, deux pays, une rencontre.</p>

        <p>
          Elle vient du Maroc, portée par ses rêves et son ambition.
          Elle traverse la mer pour écrire un nouveau chapitre,
          poursuivre son deuxième master en France,
          sans savoir que l’essentiel ne se trouvait pas seulement dans les livres.
        </p>

        <p>
          Lui est là, enraciné, authentique,
          avec ce regard qui rassure
          et ce cœur qui comprend.
        </p>

        <p>
          Leur rencontre n’était pas prévue,
          mais elle était évidente.
          Jour après jour, leur amour grandit.
          Doucement. Profondément. Sincèrement.
        </p>

        <p>
          Leur lien devient plus fort que la distance,
          plus solide que le temps.
        </p>

        <p class="final">
          <strong>Aujourd’hui, ils ont choisi de dire oui.</strong><br />
          <strong>Oui à l’amour.</strong><br />
          <strong>Oui à la vie.</strong><br />
          <strong>Oui à l’éternité.</strong>
        </p>

        <button class="story-cta" @click="scrollToDay">
          Découvrir le grand jour
        </button>
         <button class="story-cta" @click="scrollToMemories" >
Partagez vos souvenirs
        </button>
      </div>

      <!-- ===================== -->
      <!-- 🪧 PANCARTE À DROITE  -->
      <!-- ===================== -->
     <wedding-pancarte />

    </div>
  </section>
</template>

<script setup lang="ts">
import WeddingPancarte from './PancarteTrajet.vue'
const scrollToDay = () => {
  document.getElementById('grand-jour')?.scrollIntoView({
    behavior: 'smooth'
  })
}
const scrollToMemories = () => {
  document.getElementById('memories')?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* ============================= */
/* SECTION                       */
/* ============================= */
.histoire-section {
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #f6f1ea 0%, #ffffff 100%);
}

/* Tampon */
.wax-seal {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 210px;
  opacity: 0.85;
  animation: slowRotate 30s linear infinite;
}

@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ============================= */
/* LAYOUT 2 COLONNES             */
/* ============================= */
.histoire-layout {
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ============================= */
/* TEXTE                         */
/* ============================= */
.content {
  text-align: center;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #3b2f1b;
}

p {
  font-size: 1rem;
  line-height: 1.9;
  color: #5a4a3a;
  margin-bottom: 1.6rem;
}

.final {
  margin-top: 2.5rem;
}

/* CTA */
.story-cta {
  margin-top: 2rem;
  margin-right: 0.4rem;
  padding: 0.8rem 2.4rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #d6b36a, #f3d58a);
  color: #3b2f1b;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 18px 36px rgba(0,0,0,0.18);
}

/* ============================= */
/* 📱 MOBILE – RESPONSIVE CLEAN  */
/* ============================= */
@media (max-width:768px) {

  .histoire-section {
    padding: 4rem 1.2rem;
    overflow-x: hidden;
  }

  .histoire-layout {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    max-width: 100%;
  }

  /* 🕯️ Tampon plus discret */
  .wax-seal {
    width: 120px;
    top: 1rem;
    left: 1rem;
    opacity: 0.7;
  }

  /* 📖 Texte */
  .content {
    text-align: center;
    padding: 0 2rem;
  }

  h2 {
    font-size: 1.9rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.85;
    margin-bottom: 1.4rem;
  }

  .final {
    margin-top: 2.2rem;
  }

  /* 🌿 CTA */
  .story-cta {
    margin-top: 2.4rem;
    padding: 0.75rem 2.2rem;
    font-size: 0.7rem;
    letter-spacing: 0.16em;
  }

  /* 🪧 Pancarte */
  wedding-pancarte,
  .pancarte-wrapper {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

}

</style>
