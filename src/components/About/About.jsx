import React from 'react';
import './About.css';
import pilarfilosofi from '../../assets/filosofi logo-01.png'

const About = () => {
  return (
    <div className="pilar_about section__padding" id="pilar_abouts">
      <div className="pilar_abouts-text">
        <h1>About Us</h1>
      </div>
      <div className="pilar_about-filosofi">
        <img src={pilarfilosofi} alt="" />
            <h1>
              Pilar Kontinental adalah wadah pengembangan usaha yang bertempat di Malang, Jawa Timur. Kami sudah memulai aktivitas jasa travel & tour, konsultan hukum, creative & digital agency, dan jasa pengiriman /kargo sejak tahun 2017 dan baru di resmikan secara formal pada bulan juni 2022, Pilar Kontinental telah berkembang dari waktu ke waktu untuk memenuhi kebutuhan klien berdasarkan tujuan yang kami bangun pada setiap proyek. Pilar Kontinental akan selalu mempertahankan nilai-nilai kreatif, inovatif dan solutif dalam mengerjakan atau menyelesaikan suatu proyek.
              Dalam mengembangkan stratrgi perusahaan, Pilar Kontinental telah melakukan upaya untuk mengembangkan disiplin ilmu dalam menciptakan sebuah mahakarya seperti mendengarkan, memahami dan menciptakan.
              Pilar Kontinental selalu memberikan wawasan kepada klien, apa yang mereka inginkan dan butuhkan untuk memenuhi kebutuhan mereka. Karena setiap orang di dalamnya ikut andil dalam menciptakan sebuah karya sehingga selaras dengan keinginan klien dan memberikan kepuasan.
              Oleh karena itu, Pilar Kontinental selalu berkomitmen untuk memberikan pelayanan terbaik kepada setiap kliennya, baik yang tidak berwujud maupun yang berwujud.
              Kerja sama dengan berbagai potensi yang dimiliki oleh setiap orang memberikan improvisasi inovasi yang berbeda dalam setiap karya yang dihasilkan, yang akan mampu menginspirasi banyak orang.
            </h1>
      </div>
    </div>
  )
}

export default About