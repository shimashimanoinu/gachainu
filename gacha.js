const imageList = [
    "images/img1.png"
    // 新しい画像をPushしたらここに追加
];

function rollGacha() {
    const index = Math.floor(Math.random() * imageList.length);
    const img = document.getElementById("gacha-result");
    img.src = imageList[index];
}
