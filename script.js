const images = [
  'https://lh3.googleusercontent.com/pw/AP1GczPmVUpoR979KGwsXd89VIGPhwLgsCODRLtgIpvgInMXxWhZJ6h8wd7rSb3bcE7EIl_PJx7pHJEONNtuubZFtwXK-ivQpxN707W7U1lM2R9aILybsJmCXbQ2HPu0kaZAEyYJcFbQ_-5EpSDMneUC81f42skL9MrrMmmqLEHjQ33JBAJQyfewRBpfUHYeG4-swHKST-rGUTLDkc0i56385_dWED4ZPlBuXUsNSPCibklCU3_JsaaHW3V1zgUL7a22SL1W5Bik4pZ2VIQItQehHjhFEYe_747CjISD5UIP8eaO02yItKhIxIUqBry746o0UtMrKmolNrFcU8Y2A7mRlss_YXv1ZanNuckDhVAqsiXm7SsP4pbi6QhqVojHfU6P9poV82PbTdOR--PdLrYJLJyzvch7MBQrun9_5SW-biwdcYgAwq0jE2FGHToZgwJUJG11fVWjU7LvPi0p5SFVgxsnlThbY2H2W8y2SSaLzwLXBY7odY5I6urNHRgNG9YLc-PFxWsQhLX8-LLtekIRdD9Sg6EIeOO-hEw03z5GwV1xEKhtuRGaboC7BZzqdtQa1HFXBJ2f3g9OJm1eyd5UAvYAw3ZXpQQRC8pW-_1PIyrHOFFynyXRyXQQ2xcdKAOfcwPwjpHV8MUxuB_fl6wxVii71qWRSftHgjl56ENA-UXSu-wQtDn20JUzS45EzDHcR4FAoF1kQv9ycWax3wMzi_vRD7kbEhJnRpEdvIjjEawuRl2Ge9j4AmurQyzqASQG6l4qUymaKWjGLNE5P5NJrQEmkn28QEo2wbcSGeR2e9bJFRcLrGgnLqCPExMAtmAKLQyO47mme_CLPeoL9rddxnAvoZx3UPkxBL7qcXn9_m5K5EiIjTJuJH8o0tE6yTfF4QphjYmWivWKZ4YUK_XWiIarj6A_LSJpXz0rgcX8d3NhPB7v9nH1NMpFgU1z6VyhMCM9D40Rr3L-yiu7Nc7etDvy8XKZRvDd5w=w809-h607-s-no-gm?authuser=0',
  'https://lh3.googleusercontent.com/pw/AP1GczOwCiaCr1Gsry-74aVH1I2J_wCxoCg6ogTx-_nTCWwpygA087G7IMboPox7yUoLviISPOIjOfwcH_I9QpXETaEzMkXkgSxCH4iI3kPQCMDkfF4GesayPorZEvJixXU84HNppRrsWsQ5tdnehrwlhSJpdXVrAtQV0j2326XuL7dnlddws7WJiCl60B-dnCgxBK6LkAKc0vpY78DVyAsXCXuKhOYPSdy8jSdMtHQOtAuzoHhuJ0dDvPhwSaQTwx6TUkO0gdmPmYCo7FL0e1qeTryyhNOH09_rBCy3I92-XjLF_OTWCzGJ7H7Ug_wGsNDMuF4uXTojDRoI3bUY38-2v1fITD4a0RyCyOQUR-pdERfIu0n87IWlHNlFFWaNLV8LlmMwue2cAgW4aDIei3OIZPGYl1ekDaSWUMsGuGxVMKr9y3CMCSEnjiZJHPt6dB6L8YMltkEFiIVAkKETCl4BIzVTz4UuT8hOUU49xxh6NcVrEYpuRXwWI8XkXDW5JKJWMWqIzUFpZN--4Lkc5Kt5uDptgANvPIp7NXgsrSBWivhY977gSTWu9t4S7SQS1ZUEYDYCFTOKjLcv0ycG7vxPT4CNlQZBvJTqi4lWxNUuBwhTu3it_6P7rEtTxG2dTMrkMTF7VxLM1FPOpFq_g6gAX45cWYXtTwDoo4mI4UQ1HR34-4fBEatSNf0srNXO7yKIqSQFHkgy6J46rmDahDSp1KcVeCKIvzbMYx5DH9MYukpLzBE4XazFuHBlJuMrkkempRdqcU9q4cZ0p2krq7YmP3TVbqYV_TZn_8_38ggF1pVYMGE6zBXVgIS9WUJveBASX5KLZHjEc9siIeyvePeZ1RMMV7iGVj5iJNEZeqjVG0QcMwb7b5KR1y-mQED0tcIvZ9Sd9lX5jYqvpUo7tzgMfnQtjst9K8sE2aMwYFoPIV80lUMUOx3ybPo0wZhW-5nxL0YDvsiETs-jNJRbt5UE2gko2O5ZtQFWVw=w809-h607-s-no-gm?authuser=0',
  'https://lh3.googleusercontent.com/pw/AP1GczPAFAaLFRt5IcIEHUH6S_TTEPm8yGVvPuBYVTARcAuq5ItrTC6lzUCgKoMLUZPm3L0VBlx7tQzdW4ZOw93bjhZz8XUJX2p7nvEO4ahWuYZEZu-zsNH49faGOUrhf9Vds1DO_ZqUwK9klURyoD0ByRg90iLb-Kv8hjXbdqSsOD-LOoNk278-4Ge-559l1aNAWYPPixa0KbzMUF_GrmeLMXVn9pzJN5x6rVLSnOLaNXgUdlzpiIauZLvuNgBPRZVj1oh6CT16_PH2JevB8VAaTbl1qXblvsNxSiH7L9CdtIrSPWL8TZg30HIGfyg_Ml-A3zhwqeNHfjuE1oeqB7QK-_U5xbutYwdfmGFdQAV2FzfBH07gIkEYx6uWqL2tFrrfjrmYPis3_F4mZIwPSdbJzYKzWX0M8ZfhF98UaFCex0ciRkwMlx_1dWeKuKh5sbnrlkMBR_DCXwnWiwQ4BTkdHUBAAzvOfQ3jOVjqbq5Vk82G6q0Y_8RiIx53qpBWktEDt5D7poZEw-N4-xR-6uLR0-MtD3QgSr-Xgs--GRLBG-9S8skh_Trg4LwHjH_0qye68wv2TJu0Fc2KVZm-nibLdM2n5ykBZfnEkjPQ4EP4BVCsohwSUfjjynIuNKjDWcF2PUqPV7MmRshGUjxw3syJfsRmeidc68GEPKwL7J5QkJFha9WDfIhVgZ3C3VXyV-f72kGMjZM8apqf5ukaadHPwQtk37kK9O_2T2T2ExfYj94hPiF_w34Vloof_uQhPvJ0W-wxENFLkxDw3NJxEnXvUtgQuxgEGekqDvbivpAnuqjhKBFVn8l7K92vrBSLfrM4KVBe0R0fGxwdbPfKN3_the7X6KiGNVuKqtaObPGdQp1g47qPAmWM0nV-CsxAWW0pTxImIqBUmzbEuyP_tqABorNQ8IM0VVomiMPGn3Em6nFpM69eOrCxLoNxLiWyJ2g6Y7dQcCbMCIpSKOrBMP4yPlnc6JS5dxBvTA=w809-h607-s-no-gm?authuser=0'
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
  setInterval(changeImage, 0100); // 每3秒切換一次圖片
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
    alert('哈哈，輸入錯了🤣.');
    passwordInput.value = ''; // 清空輸入欄
  }
}
