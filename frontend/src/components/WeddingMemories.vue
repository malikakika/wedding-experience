<template>

  <section id="memories" class="memory-section">

    <!-- ✨ GLOW -->
    <div class="memory-glow glow-left"></div>
    <div class="memory-glow glow-right"></div>

    <div class="memory-card">

      <div class="memory-badge">
        ✨ Wedding Memories ✨
      </div>

      <h2>Partagez vos souvenirs</h2>

      <p class="memory-text">
        Immortalisez cette journée magique avec nous 💍
        <br /><br />
        Scannez le QR code pour ajouter directement
        vos photos et vidéos du mariage dans notre album privé.
      </p>

      <!-- QR CODE -->
      <div class="qr-wrapper">

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https://photos.app.goo.gl/WJGtJypuYmywqLJ87"
          alt="QR Code Mariage"
          class="qr-code"
        />

      </div>

      <!-- BUTTON -->
      <a
        href="https://photos.app.goo.gl/WJGtJypuYmywqLJ87"
        target="_blank"
        class="memory-button"
      >
        Ajouter mes photos 📸
      </a>

      <p class="memory-small">
        Merci de partager ces précieux instants avec nous ✨
      </p>

    </div>

  </section>

</template>

<style scoped>

/* ======================================= */
/* SECTION                                 */
/* ======================================= */

.memory-section {
  position: relative;
  overflow: hidden;

  padding: 7rem 2rem;

  background:
    radial-gradient(circle at top left, rgba(255,215,120,0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(255,215,120,0.08), transparent 30%),
    linear-gradient(
      180deg,
      #140c06 0%,
      #24170d 45%,
      #120b06 100%
    );

  display: flex;
  justify-content: center;
}

/* ======================================= */
/* GLOW EFFECTS                            */
/* ======================================= */

.memory-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 0;
}

.glow-left {
  width: 300px;
  height: 300px;

  background: rgba(255,215,122,0.15);

  top: -80px;
  left: -80px;
}

.glow-right {
  width: 260px;
  height: 260px;

  background: rgba(255,190,80,0.12);

  bottom: -100px;
  right: -60px;
}

/* ======================================= */
/* CARD                                    */
/* ======================================= */

.memory-card {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 760px;

  text-align: center;

  padding: 4rem 3rem;

  border-radius: 36px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.10),
      rgba(255,255,255,0.03)
    );

  backdrop-filter: blur(18px);

  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
    0 30px 80px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

/* ======================================= */
/* BADGE                                   */
/* ======================================= */

.memory-badge {
  display: inline-block;

  padding: 0.7rem 1.5rem;

  margin-bottom: 2rem;

  border-radius: 999px;

  background: rgba(255,215,122,0.12);

  border: 1px solid rgba(255,215,122,0.25);

  color: #ffe8b0;

  font-size: 0.85rem;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}

/* ======================================= */
/* TITLE                                   */
/* ======================================= */

.memory-card h2 {
  font-family: 'Playfair Display', serif;

  font-size: 4rem;

  margin-bottom: 2rem;

  color: #fff5da;

  line-height: 1.1;
}

/* ======================================= */
/* TEXT                                    */
/* ======================================= */

.memory-text {
  max-width: 560px;

  margin: 0 auto 3rem;

  color: rgba(255,255,255,0.82);

  font-size: 1.1rem;

  line-height: 1.9;
}

/* ======================================= */
/* QR CODE                                 */
/* ======================================= */

.qr-wrapper {
  display: flex;
  justify-content: center;

  margin-bottom: 2.5rem;
}

.qr-code {
  width: 280px;

  padding: 1rem;

  border-radius: 30px;

  background: white;

  box-shadow:
    0 25px 60px rgba(0,0,0,0.45);

  transition: 0.4s ease;
}

.qr-code:hover {
  transform: scale(1.04) rotate(-1deg);
}

/* ======================================= */
/* BUTTON                                  */
/* ======================================= */

.memory-button {
  display: inline-block;

  padding: 1.2rem 2.4rem;

  border-radius: 999px;

  text-decoration: none;

  font-weight: 700;

  color: #1a1209;

  background:
    linear-gradient(
      135deg,
      #fff4cf 0%,
      #ffd97a 50%,
      #e4b54c 100%
    );

  box-shadow:
    0 12px 30px rgba(255,215,122,0.35);

  transition: 0.35s ease;
}

.memory-button:hover {
  transform: translateY(-4px) scale(1.03);

  box-shadow:
    0 18px 40px rgba(255,215,122,0.45);
}

/* ======================================= */
/* SMALL TEXT                              */
/* ======================================= */

.memory-small {
  margin-top: 2rem;

  color: rgba(255,255,255,0.5);

  font-size: 0.95rem;

  letter-spacing: 0.04em;
}

/* ======================================= */
/* MOBILE                                  */
/* ======================================= */

@media (max-width: 768px) {

  .memory-section {
    padding: 5rem 1.2rem;
  }

  .memory-card {
    padding: 2.8rem 1.5rem;
    border-radius: 26px;
  }

  .memory-card h2 {
    font-size: 2.5rem;
  }

  .memory-text {
    font-size: 1rem;
    line-height: 1.8;
  }

  .qr-code {
    width: 220px;
  }

  .memory-button {
    width: 100%;
    text-align: center;
  }

}

</style>