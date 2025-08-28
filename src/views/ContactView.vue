<script setup></script>

<template>
  <div class="contact-information-container">
    <div class="form">
      <h2 class="text-center">Əlaqə</h2>
      <div class="d-flex justify-content-center">
        <div>
          <ul class="list-inline contact-information">
            <li>
              <i class="bi bi-telephone-fill"></i>
              <span> Telefon nömrəsi: +994 77 328 84 13</span>
            </li>
            <li>
              <i class="bi bi-globe-americas"></i> <span> Veb sayt: </span>
              <a href="https://adauthik.az/" class="text-white"> adauthik.az</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center bg-white">
        <img src="../assets/images/thik.png" alt="" height="175px" />
      </div>
      <div class="d-flex justify-content-center">
        <div class="social-media">
          <a href="https://www.facebook.com/ADAUASAU" target="_blank">
            <img src="../assets/images/facebook.png" alt="" width="40px" />
          </a>
        </div>
        <div class="social-media">
          <a href="https://www.instagram.com/adaueduaz/" target="_blank">
            <img src="../assets/images/instagram.png" alt="" width="40px" />
          </a>
        </div>
        <div class="social-media">
          <a href="https://adau.edu.az/" target="_blank">
            <img
              src="../assets/images/icons8-www-100.png"
              alt=""
              width="40px"
            />
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div>
          <ul class="list-inline contact-information">
            <li>
              <i class="bi bi-geo-alt-fill"></i>
              <span style="line-height: 18px">
                Ünvan: Atatürk prospekti 450, Az2000, Gəncə, Azərbaycan
              </span>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <span> E-mail: info@adau.edu.az </span>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <span> E-mail: office@adau.edu.az </span>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <span> E-mail: press@adau.edu.az </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <img src="../assets/images/ADAU-logo.png" alt="" />
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.contact-information-container {
  width: 100%;
}

.social-media {
  margin: 10px;
}

.contact-information {
  font-size: 20px;
}

@media (max-width: 650px) {
  .contact-information {
    font-size: 14px;
  }
}
</style>
