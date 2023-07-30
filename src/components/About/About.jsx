// About.js
import React from 'react';
import './Abouts.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
        <div className="pilar_abouts-texts">
          <div className="pilar_about-filosofi">
            <h2>Apa Itu Pilar Kontinental?</h2>
            <p>
              Pilar Kontinental adalah wadah pengembangan usaha yang bertempat di Malang, Jawa Timur. Kami sudah memulai aktivitas jasa travel & tour, konsultan hukum, creative & digital agency, dan jasa pengiriman /kargo sejak tahun 2017 dan baru diresmikan secara formal pada bulan Juni 2022.
            </p>
          </div>
          <div className="pilar_about-filosofis">
            <h2>Mengapa Harus Di Pilar Kontinental?</h2>
            <p>
              Pilar Kontinental selalu memberikan wawasan kepada klien, apa yang mereka inginkan dan butuhkan untuk memenuhi kebutuhan mereka. Karena setiap orang di dalamnya ikut andil dalam menciptakan sebuah karya sehingga selaras dengan keinginan klien dan memberikan kepuasan.
              Oleh karena itu, Pilar Kontinental selalu berkomitmen untuk memberikan pelayanan terbaik kepada setiap kliennya, baik yang tidak berwujud maupun yang berwujud.
              Kerja sama dengan berbagai potensi yang dimiliki oleh setiap orang memberikan improvisasi inovasi yang berbeda dalam setiap karya yang dihasilkan, yang akan mampu menginspirasi banyak orang.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
