// script.js

const rollButton = document.getElementById("roll-button");
const resultBox = document.getElementById("result-box");
const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultRarity = document.getElementById("result-rarity");
const gachaSound = document.getElementById("gacha-sound");

const gachaData = [
  { name: "サンプル", rarity: "N", image: "images/img1.png" }
];

rollButton.addEventListener("click", () => {
  // ランダムでキャラ選択
  const selected = gachaData[Math.floor(Math.random() * gachaData.length)];

  // アニメーション表示
  const overlay = document.getElementById("animation-overlay");
  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("hidden"), 1000);

  // 効果音再生
  gachaSound.currentTime = 0;
  gachaSound.play();

  // 結果表示
  resultImage.src = selected.image;
  resultName.textContent = selected.name;
  resultRarity.textContent = selected.rarity;
  resultRarity.className = ''; // 前のレアリティを消す
  resultRarity.classList.add(`rarity-${selected.rarity}`);
  resultBox.classList.remove("hidden");
});
