<template>
  <div class="pancarte-wrapper">
    <div class="pancarte">

      <p class="subtitle">Deux pays, une seule destination</p>

      <!-- 🌍 Trajet -->
      <div class="route">

        <!-- Maroc -->
        <div class="country-block">
          <img
            src="@/assets/maroc-map.png"
            alt="Carte du Maroc"
            class="country-map"
          />
          <span class="country-label">Maroc</span>
        </div>

        <!-- Ligne animée + avion -->
        <div class="line animated-line">
          <span class="plane">✈️</span>
        </div>

        <!-- France -->
        <div class="country-block">
          <img
            src="@/assets/france-map.svg"
            alt="Carte de la France"
            class="country-map"
          />
          <span class="country-label">France</span>
        </div>

      </div>

      <p class="distance">≈ 1 850 km</p>

      <p class="names">Malika ✦ Maxime</p>
      <p class="date">Samedi 20 Juin 2026</p>
    </div>
  </div>
</template>
<style scoped>
.pancarte-wrapper {
  display: flex;
  justify-content: center;
}

/* 🪧 Pancarte */
.pancarte {
  width: 100%;
  max-width: 720px;
  padding: 3.2rem 3.5rem;
  background: #f6ecd8;
  border-radius: 28px;
  text-align: center;

  box-shadow:
    0 35px 80px rgba(0,0,0,0.38),
    inset 0 1px 0 rgba(255,255,255,0.6);
}

/* Titre */
.subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 3rem;
  color: #6a563d;
}

/* 🌍 Trajet */
.route {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
}

/* Bloc pays */
.country-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

/* Carte pays */
.country-map {
  width: 95px;
  opacity: 0.95;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.25));
}

/* Nom pays */
.country-label {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: #3b2f1b;
}

/* ============================= */
/* ✨ LIGNE ANIMÉE               */
/* ============================= */
.line {
  position: relative;
  width: 200px;
  height: 2px;

  background-image: repeating-linear-gradient(
    to right,
    #c6a664 0,
    #c6a664 8px,
    transparent 8px,
    transparent 18px
  );

  background-size: 26px 2px;
  animation: drawLine 4s linear infinite;
}

/* Avion */
.plane {
  position: absolute;
  top: -1.2rem;
  left: 0;
  font-size: 1.2rem;

  animation: flyPlane 4s ease-in-out infinite;
}

/* ============================= */
/* 🎞️ ANIMATIONS                */
/* ============================= */
@keyframes drawLine {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 200px 0;
  }
}

@keyframes flyPlane {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  50% {
    transform: translateX(100px) rotate(5deg);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateX(200px) rotate(0deg);
    opacity: 0;
  }
}

/* Distance */
.distance {
  margin-top: 1.6rem;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  color: #8a744f;
}

/* Noms */
.names {
  margin-top: 2.6rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.65rem;
  color: #3b2f1b;
}

/* Date */
.date {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  color: #6a563d;
}

/* 📱 Mobile */
@media (max-width: 768px) {
  .pancarte {
    padding: 2.6rem 2rem;
  }

  .route {
    gap: 1.2rem;
  }

  .country-map {
    width: 75px;
  }

  .line {
    width: 120px;
  }

  .names {
    font-size: 1.35rem;
  }

  @keyframes flyPlane {
    100% {
      transform: translateX(120px);
      opacity: 0;
    }
  }
}

/* 📱 MOBILE – PANCARTE */
@media (max-width: 768px) {

  .pancarte-wrapper {
    width: 100%;
    padding: 2;
    overflow-x: hidden;
  }

  .pancarte {
    width: 100%;
    max-width: 100%;
    padding: 2.4rem 1.6rem;
    border-radius: 22px;
    box-sizing: border-box;
  }

  /* Titre */
  .subtitle {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    margin-bottom: 2rem;
  }

  /* 🌍 Trajet vertical */
  .route {
    flex-direction: column;
    gap: 1.4rem;
  }

  /* Cartes pays */
  .country-map {
    width: 70px;
  }

  .country-label {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
  }

  /* ✨ Ligne verticale animée */
  .line {
    width: 2px;
    height: 110px;

    background-image: repeating-linear-gradient(
      to bottom,
      #c6a664 0,
      #c6a664 8px,
      transparent 8px,
      transparent 18px
    );

    background-size: 2px 26px;
    animation: drawLineVertical 3.5s linear infinite;
  }

  /* ✈️ Avion vertical */
  .plane {
    top: 0;
    left: -0.6rem;
    font-size: 1.1rem;
    animation: flyPlaneVertical 3.5s ease-in-out infinite;
  }

  /* Distance */
  .distance {
    font-size: 0.7rem;
    margin-top: 1.4rem;
  }

  /* Noms */
  .names {
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  /* Date */
  .date {
    font-size: 0.7rem;
  }

  /* 🎞️ Animations mobile */
  @keyframes drawLineVertical {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 110px;
    }
  }

  @keyframes flyPlaneVertical {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      transform: translateY(55px);
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(110px);
      opacity: 0;
    }
  }
}

</style>
