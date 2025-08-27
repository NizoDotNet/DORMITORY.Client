<template>
  <div class="container my-5">
    <div class="card shadow p-4">
      <h4 class="text-center mb-4">
        Azərbaycan Dövlət Aqrar Universiteti Publik Hüquqi Şəxs <br />
        <small>Tələbə evində yaşayış sahəsi ilə təmin olunma haqqında</small>
      </h4>

      <p class="text-end">
        “____” ______________ 2025-ci il &nbsp; {{ contract.city }} şəh.
      </p>

      <p>
        Azərbaycan Dövlət Aqrar Universiteti publik hüquqi şəxs (bundan sonra -
        ADAU) Nizamnaməsi əsasında fəaliyyət göstərən Ümumi işlər üzrə prorektor
        Ramin Hüseyn oğlu Əliyev şəxsində bir tərəfdən və
        <b>{{ contract.fullName }}</b
        >, tələbəsi <b>{{ contract.specialization }}</b> arasında (bundan sonra
        - yaşayan tərəf) bu Müqavilə bağlandı.
      </p>

      <h5>1. Müqavilənin predmeti</h5>
      <p>
        Müqavilənin predmeti tələbənin Universitet tərəfindən müəyyən edilmiş
        tələbə evində yaşayış sahəsi ilə təmin olunması ilə bağlı tərəflər
        arasında yaranan münasibətlərdir.
      </p>

      <h5>2. Tərəflərin vəzifələri və hüquqları</h5>
      <p>
        <b>2.1. ADAU-nun vəzifələri:</b><br />
        – Tələbəni yaşayış sahəsi ilə təmin etmək;<br />
        – Yaşama müddətində normal məişət şəraiti (su, istilik, mebel, yataq
        avadanlığı və s.) təmin etmək;<br />
        – Təhlükəsizliyi təmin etmək və s.<br /><br />

        <b>2.3. Yaşayanların vəzifələri:</b><br />
        – Daxili qaydalara və Müqaviləyə riayət etmək;<br />
        – Yaşayış haqqını əvvəlcədən ödəmək;<br />
        – Əmlakdan düzgün istifadə etmək, zərər vurduqda əvəzini ödəmək;<br />
        – Ev heyvanı saxlamamaq;<br />
        – Rejim və komendant tələblərinə əməl etmək;<br />
        – Dövlət mülkiyyətini qorumaq, siqaret, narkotik, spirtli içki qəbul
        etməmək;<br />
        – Otaqda çoxsaylı qonaq saxlamamaq;<br />
        – Su, istilik, elektrik enerjisinə qənaət etmək;<br />
        – İcarəyə verilmiş otağı başqasına güzəştə getməmək;<br />
        – Tələbə evinə kənar şəxsləri buraxmamaq;<br />
        – Çıxış zamanı komendantı 2 gün əvvəl xəbərdar etmək və otağı təhvil
        vermək;<br />
        – Saat 23:00-dan gec gəlməmək;<br /><br />

        <b>2.4. Yaşayanların hüquqları:</b><br />
        – Tələbə Şurasını seçmək və seçilmək;<br />
        – İctimai işlərə cəlb olunmaq.
      </p>

      <h5>3. Yaşayanın məsuliyyəti</h5>
      <p>
        Yaşayan bu Müqavilənin 2.3.1–2.3.16 bəndlərini pozduqda tələbə evindən
        xaric olunur.
      </p>

      <h5>4. Müqavilə üzrə ödənişlər və hesablaşma qaydası</h5>
      <p>
        – İllik yaşayış haqqı 600 AZN müəyyən edilir və əvvəlcədən universitetin
        hesabına ödənilməlidir.<br />
        – Hissə-hissə ödəniş də mümkündür, lakin tələbə evindən xaric olunduqda
        ödəniş geri qaytarılmır.
      </p>

      <h5>5. Müqavilənin müddəti və ləğvi</h5>
      <p>
        Müqavilənin müddəti <b>{{ contract.startDate }}</b> tarixdən
        <b>{{ contract.endDate }}</b> tarixədək müəyyən edilir.<br />
        Müqavilə tərəflərdən biri tərəfindən yazılı xəbərdarlıqla ləğv edilə
        bilər.
      </p>

      <h5>6. Müqavilənin dili və nüsxələri</h5>
      <p>
        Bu Müqavilə Azərbaycan dilində olmaqla, 2 nüsxədə tərtib edilmişdir: bir
        nüsxəsi ADAU-da, digəri isə Yaşayan tərəfdə saxlanılır.
      </p>

      <h5>7. Tərəflərin ünvanları və rekvizitləri</h5>
      <p>
        <b>{{ contract.fullName }}</b
        ><br />
        Ünvan: {{ contract.address }} <br />
        Şəxsiyyət vəsiqəsi: {{ contract.idCard }}
      </p>

      <div class="text-end mt-5">
        <p>İmza: _____________________</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  city: String,
  fullName: String,
  specialization: String,
  startDate: String,
  endDate: String,
  address: String,
  idCard: String,
});
</script>
