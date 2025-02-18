<template>
  <div class="celebration-container">
    <div class="celebration-content">
      <h1 class="animated-title">🎉 С Днем Рождения! 🎂</h1>

      <div
        class="interactive-card"
        @click="toggleCard"
        :class="{ 'is-flipped': isFlipped }"
      >
        <div class="card-inner">
          <div class="card-front">
            <p>Нажми, чтобы открыть!</p>
          </div>
          <div class="card-back">
            <p>Желаю счастья и радости!<br>✨🎈🎁</p>
          </div>
        </div>
      </div>

      <button @click="launchConfetti" class="confetti-button">Запустить конфетти!</button>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
	data() {
    return {
      isFlipped: false
    }
  },
  methods: {
		toggleCard() {
      this.isFlipped = !this.isFlipped;
    },
    launchConfetti() {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio)
        }));
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  },
  mounted() {
    this.launchConfetti();
  }
}
</script>

<style scoped>
.celebration-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.celebration-content{
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.animated-title {
  animation: bounce 1.5s infinite;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.interactive-card {
  perspective: 1000px;
  margin: auto;
  cursor: pointer;
  width: 300px; /* Фиксированная ширина */
  height: 400px; /* Фиксированная высота */
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: center; /* Центральная точка трансформации */
}

.is-flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 260px;
  height: 360px;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 20px;
  font-size: 24px;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-front {
  background: #ff4081;
  transform: rotateY(0deg);
}

.card-back {
  background: #f50057;
  transform: rotateY(180deg);
}

.confetti-button {
  margin-top: 30px;
  padding: 15px 30px;
  font-size: 18px;
  background: #fff;
  color: #ff4081;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s;
}

.confetti-button:hover {
  transform: scale(1.1);
}
</style>