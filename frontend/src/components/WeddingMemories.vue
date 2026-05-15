<template>

  <section id="memories" class="memory-section">

    <!-- ✨ Glow -->
    <div class="memory-glow glow-left"></div>
    <div class="memory-glow glow-right"></div>

    <div class="memory-card">

      <!-- Badge -->
      <div class="memory-badge">
        ✨ Wedding Memories ✨
      </div>

      <!-- Title -->
      <h2>Partagez vos souvenirs</h2>

      <!-- Text -->
      <p class="memory-text">
        Immortalisez cette journée magique avec nous 💍
        <br /><br />
        Scannez le QR code pour ajouter directement
        vos photos et vidéos du mariage dans notre album privé.
      </p>

      <!-- QR CODE -->
      <div class="qr-wrapper">

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://photos.app.goo.gl/WJGtJypuYmywqLJ87"
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

      <!-- Footer -->
      <p class="memory-small">
        Merci de partager ces précieux instants avec nous ✨
      </p>

    </div>

  </section>

</template>

<style scoped>

/* ====================================== */
/* SECTION                                */
/* ====================================== */
* {
  box-sizing: border-box;
}
.memory-section {
  position: relative;
  overflow: hidden;

  width: 100%;

  padding:
    clamp(4rem, 8vw, 8rem)
    clamp(1rem, 4vw, 2rem);

  background:
    radial-gradient(
      circle at top left,
      rgba(255,215,120,0.12),
      transparent 30%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(255,215,120,0.08),
      transparent 30%
    ),

    linear-gradient(
      180deg,
      #140c06 0%,
      #24170d 45%,
      #120b06 100%
    );

  display: flex;
  justify-content: center;
  align-items: center;
}

/* ====================================== */
/* GLOW                                   */
/* ====================================== */

.memory-glow {
  position: absolute;
  border-radius: 50%;

  filter: blur(120px);

  z-index: 0;
}

.glow-left {
  width: clamp(180px, 30vw, 320px);
  height: clamp(180px, 30vw, 320px);

  background: rgba(255,215,122,0.12);

  top: -80px;
  left: -80px;
}

.glow-right {
  width: clamp(160px, 25vw, 280px);
  height: clamp(160px, 25vw, 280px);

  background: rgba(255,190,80,0.10);

  bottom: -100px;
  right: -60px;
}

/* ====================================== */
/* CARD                                   */
/* ====================================== */

.memory-card {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 760px;

  text-align: center;

  padding:
    clamp(2rem, 5vw, 4rem)
    clamp(1.2rem, 4vw, 3rem);

  border-radius:
    clamp(22px, 3vw, 36px);

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.10),
      rgba(255,255,255,0.03)
    );

  backdrop-filter: blur(18px);

  border:
    1px solid rgba(255,255,255,0.08);

  box-shadow:
    0 30px 80px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

/* ====================================== */
/* BADGE                                  */
/* ====================================== */

.memory-badge {
  display: inline-block;

  padding:
    0.7rem 1.5rem;

  margin-bottom: 2rem;

  border-radius: 999px;

  background:
    rgba(255,215,122,0.12);

  border:
    1px solid rgba(255,215,122,0.25);

  color: #ffe8b0;

  font-size:
    clamp(0.72rem, 1vw, 0.9rem);

  letter-spacing: 0.18em;

  text-transform: uppercase;
}

/* ====================================== */
/* TITLE                                  */
/* ====================================== */

.memory-card h2 {
  font-family: 'Playfair Display', serif;

  font-size:
    clamp(2.2rem, 7vw, 4.5rem);

  line-height: 1.1;

  margin-bottom: 2rem;

  color: #fff5da;
}

/* ====================================== */
/* TEXT                                   */
/* ====================================== */

.memory-text {
  max-width: 560px;

  margin:
    0 auto 3rem;

  color:
    rgba(255,255,255,0.82);

  font-size:
    clamp(0.95rem, 2vw, 1.15rem);

  line-height: 1.9;
}

/* ====================================== */
/* QR WRAPPER                             */
/* ====================================== */

.qr-wrapper {
  display: flex;
  justify-content: center;

  width: 100%;

  margin-bottom: 2.5rem;
}

/* ====================================== */
/* QR CODE                                */
/* ====================================== */

.qr-code {
  width:
    clamp(180px, 50vw, 290px);

  max-width: 100%;

  aspect-ratio: 1;

  object-fit: cover;

  padding:
    clamp(0.7rem, 2vw, 1rem);

  border-radius:
    clamp(20px, 3vw, 30px);

  background: white;

  box-shadow:
    0 25px 60px rgba(0,0,0,0.45);

  transition:
    transform 0.4s ease;
}

.qr-code:hover {
  transform:
    scale(1.04)
    rotate(-1deg);
}

/* ====================================== */
/* BUTTON                                 */
/* ====================================== */

.memory-button {

  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 360px;

  margin: 0 auto;

  padding:
    1rem 1.5rem;

  border: none;
  border-radius: 999px;

  background:
    linear-gradient(
      135deg,
      #d6b36a,
      #f3d58a
    );

  color: #3b2f1b;

  text-decoration: none;

  text-align: center;

  font-size:
    clamp(0.9rem, 2vw, 1rem);

  font-weight: 700;

  line-height: 1.4;

  cursor: pointer;

  box-shadow:
    0 18px 36px rgba(0,0,0,0.2);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.memory-button:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 24px 42px rgba(0,0,0,0.25);
}

/* ====================================== */
/* FOOTER TEXT                            */
/* ====================================== */

.memory-small {
  margin-top: 2rem;

  color:
    rgba(255,255,255,0.5);

  font-size:
    clamp(0.82rem, 1.5vw, 0.95rem);

  line-height: 1.7;
}

/* ====================================== */
/* MOBILE                                 */
/* ====================================== */

@media (max-width: 768px) {

  .memory-section {
    padding:
      4rem 1rem;
  }

  .memory-card {
    padding:
      2rem 1.2rem;
  }

  .memory-text {
    line-height: 1.8;
  }

  .memory-button {

    max-width: 100%;

    padding:
      1rem;

    font-size: 0.95rem;
  }

}

/* ====================================== */
/* SMALL PHONES                           */
/* ====================================== */

@media (max-width: 420px) {

  .memory-card h2 {
    font-size: 2.2rem;
  }

  .memory-badge {
    font-size: 0.7rem;
  }

}

/* ====================================== */
/* TABLET                                 */
/* ====================================== */

@media (min-width: 768px) and (max-width: 1024px) {

  .memory-card {
    max-width: 680px;
  }

}

/* ====================================== */
/* LARGE DESKTOP                          */
/* ====================================== */

@media (min-width: 1600px) {

  .memory-card {
    max-width: 860px;
  }

}

</style>