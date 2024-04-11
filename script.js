const images = [
  'https://www.example.com/image1.jpg',
  'https://www.example.com/image2.jpg',
  'https://www.example.com/image3.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementById('image');
const imageContainer = document.getElementById('imageContainer');
const passwordForm = document.getElementById('passwordForm');
const musicElement = document.getElementById('music');

// 音樂要等到密碼輸入正確後才播放
musicElement.autoplay = false;

function changeImage() {
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// 首次不自動切換圖片
function startImageCarousel() {
  changeImage(); // 切換到第一張圖片
  setInterval(changeImage, 3000); // 每3秒切換一次圖片
}

function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  if (password === '580777') {
    imageContainer.style.display = 'block'; // 顯示圖片區域
    passwordForm.style.display = 'none'; // 隱藏密碼輸入區域
    musicElement.play(); // 播放音樂
    startImageCarousel(); // 開始圖片輪播
  } else {
    alert('Incorrect password. Please try again.');
    passwordInput.value = ''; // 清空輸入欄
  }
}
