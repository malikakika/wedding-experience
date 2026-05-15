<template>
  <section id="grand-jour" class="grand-jour-section">

    <!-- ✨ BACKGROUND LIGHT -->
    <div class="luxury-glow glow-1"></div>
    <div class="luxury-glow glow-2"></div>

    <div class="grand-jour-container">

      <!-- ========================= -->
      <!-- 💍 CARD PRINCIPALE -->
      <!-- ========================= -->
      <div class="main-card">

        <div class="badge">
          ✨ Wedding Day ✨
        </div>

        <h2>Le Grand Jour</h2>

        <div class="separator"></div>

        <p class="date">
          Samedi 20 Juin 2026
        </p>

        <p class="intro">
          Nous avons l'immense bonheur de vous convier
          à célébrer avec nous cette journée unique,
          remplie d’amour, d’émotion et de magie.
        </p>

        <!-- ========================= -->
        <!-- 🏛️ MAIRIE -->
        <!-- ========================= -->
        <div class="place-card">
          <div class="place-icon">🏛️</div>

          <div>
            <h3>Mairie de Cergy</h3>

            <p>
              3 Place Olympe de Gouges<br />
              95800 Cergy
            </p>
          </div>
        </div>

        <!-- ========================= -->
        <!-- 🏡 RÉCEPTION -->
        <!-- ========================= -->
        <div class="place-card">
          <div class="place-icon">🥂</div>

          <div>
            <h3>Lieu de réception</h3>

            <p>
              Airbnb — 32 Chemin des Champeaux<br />
              Vaux-sur-Seine, Île-de-France 78740
            </p>
          </div>
        </div>

        <p class="gold-quote">
          “Un instant d’éternité,
          entouré des personnes que nous aimons.”
        </p>

      </div>

      <!-- ========================= -->
      <!-- 🗺️ MAPS -->
      <!-- ========================= -->
      <div class="maps-grid">

        <!-- MAP MAIRIE -->
        <div class="map-card">

          <div class="map-title">
            🏛️ Cérémonie civile
          </div>

          <iframe
            src="https://www.google.com/maps?q=3+Place+Olympe+de+Gouges,+95800+Cergy&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- MAP RÉCEPTION -->
        <div class="map-card">

          <div class="map-title">
            🥂 Réception
          </div>

          <iframe
            src="https://www.google.com/maps?q=32+Chemin+des+Champeaux,+78740+Vaux-sur-Seine&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

/* ================================= */
/* SECTION                           */
/* ================================= */

.grand-jour-section {
  position: relative;
  overflow: hidden;

  padding: 7rem 2rem;

  background:
    radial-gradient(circle at top left, rgba(255,215,120,0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(255,215,120,0.08), transparent 30%),
    linear-gradient(
      180deg,
      #120b05 0%,
      #1c1209 35%,
      #2a1a0f 100%
    );
}

/* ================================= */
/* GLOW EFFECTS                      */
/* ================================= */

.luxury-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 0;
}

.glow-1 {
  width: 320px;
  height: 320px;
  background: rgba(255, 217, 122, 0.15);
  top: -100px;
  left: -80px;
}

.glow-2 {
  width: 300px;
  height: 300px;
  background: rgba(255, 190, 80, 0.12);
  bottom: -120px;
  right: -80px;
}

/* ================================= */
/* CONTAINER                         */
/* ================================= */

.grand-jour-container {
  position: relative;
  z-index: 2;

  max-width: 1350px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* ================================= */
/* MAIN CARD                         */
/* ================================= */

.main-card {
  position: relative;

  padding: 4rem;

  border-radius: 34px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.04)
    );

  backdrop-filter: blur(18px);

  border: 1px solid rgba(255,255,255,0.12);

  box-shadow:
    0 30px 80px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.1);
}

/* ================================= */
/* BADGE                             */
/* ================================= */

.badge {
  display: inline-block;

  padding: 0.7rem 1.4rem;
  margin-bottom: 2rem;

  border-radius: 999px;

  background: rgba(255,215,122,0.12);

  border: 1px solid rgba(255,215,122,0.3);

  color: #ffe7a6;

  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* ================================= */
/* TITLE                             */
/* ================================= */

.main-card h2 {
  font-family: 'Playfair Display', serif;

  font-size: 4rem;
  line-height: 1.1;

  margin-bottom: 1.5rem;

  color: #fff7dc;
}

/* ================================= */
/* SEPARATOR                         */
/* ================================= */

.separator {
  width: 120px;
  height: 2px;

  margin-bottom: 2rem;

  background: linear-gradient(
    90deg,
    transparent,
    #ffd97a,
    transparent
  );
}

/* ================================= */
/* TEXT                              */
/* ================================= */

.date {
  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 0.12em;

  color: #ffd97a;

  margin-bottom: 2rem;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.9;

  color: rgba(255,255,255,0.82);

  margin-bottom: 3rem;
}

/* ================================= */
/* PLACE CARD                        */
/* ================================= */

.place-card {
  display: flex;
  gap: 1.3rem;
  align-items: flex-start;

  padding: 1.6rem;
  margin-bottom: 1.5rem;

  border-radius: 22px;

  background: rgba(255,255,255,0.05);

  border: 1px solid rgba(255,255,255,0.08);

  transition: 0.35s ease;
}

.place-card:hover {
  transform: translateY(-4px);

  background: rgba(255,255,255,0.08);
}

.place-icon {
  font-size: 2rem;
}

.place-card h3 {
  color: #ffe8ae;

  margin-bottom: 0.5rem;

  font-size: 1.2rem;
}

.place-card p {
  color: rgba(255,255,255,0.75);

  line-height: 1.7;
}

/* ================================= */
/* GOLD QUOTE                        */
/* ================================= */

.gold-quote {
  margin-top: 3rem;

  font-family: 'Playfair Display', serif;

  font-size: 1.7rem;
  line-height: 1.6;
  font-style: italic;

  background: linear-gradient(
    135deg,
    #fff6d6 0%,
    #ffd97a 25%,
    #fff7e4 50%,
    #d4a53a 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 20px rgba(255,215,122,0.35);
}

/* ================================= */
/* MAPS GRID                         */
/* ================================= */

.maps-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ================================= */
/* MAP CARD                          */
/* ================================= */

.map-card {
  overflow: hidden;

  border-radius: 28px;

  background: rgba(255,255,255,0.06);

  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.35);

  backdrop-filter: blur(12px);
}

/* ================================= */
/* MAP TITLE                         */
/* ================================= */

.map-title {
  padding: 1.2rem 1.5rem;

  background: rgba(255,215,122,0.08);

  color: #ffe7a6;

  font-weight: 600;
  letter-spacing: 0.08em;
}

/* ================================= */
/* MAP                               */
/* ================================= */

.map-card iframe {
  width: 100%;
  height: 280px;
  border: none;
}

/* ================================= */
/* MOBILE                            */
/* ================================= */

@media (max-width: 900px) {

  .grand-jour-section {
    padding: 5rem 1.2rem;
  }

  .grand-jour-container {
    grid-template-columns: 1fr;
  }

  .main-card {
    padding: 2.4rem;
    border-radius: 24px;
  }

  .main-card h2 {
    font-size: 2.8rem;
  }

  .gold-quote {
    font-size: 1.3rem;
  }

  .map-card iframe {
    height: 240px;
  }

}

</style>