<template>
  <section class="about-section">
    <div class="heading">
      <span>about us</span>
      <h3>good quality dishes</h3>
    </div>

    <div class="row">
      <div class="about-content">
        <img src="../assets/images/pexels-chef.jpg" alt="">

        <div class="about-content-text">
          <p>Welcome to HungerGo, your go-to destination for delicious food delivered straight to your
            doorstep. We are a passionate team dedicated to connecting food lovers with the best
            restaurants, cafes, and street vendors in town. Whether you're craving comfort food, gourmet
            cuisine, or a quick snack, we've got you covered with an easy and seamless ordering experience.
          </p>
          <p>Customers can eat at the restaurant to experience the India atmosphere or can order food to be
            delivered to their homes.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="about-article">
        <h3>food brings people together</h3>
      </div>
    </div>

    <div class="row gallery">
      <div class="wrapper">
        <img src="../assets/images/taco/taco-2.jpg" alt="">
        <img src="../assets/images/taco/taco-4.jpg" alt="">
        <img src="../assets/images/burrito/burrito-6.jpg" alt="">
        <img src="../assets/images/burrito/burrito-2.jpg" alt="">
        <img src="../assets/images/burrito/burrito-3.jpg" alt="">
        <img src="../assets/images/nachos/nachos-1.jpg" alt="">
        <img src="../assets/images/nachos/nachos-2.jpg" alt="">
        <img src="../assets/images/nachos/nachos-3.jpg" alt="">
        <img src="../assets/images/dessert/dessert-2.jpg" alt="">
        <img src="../assets/images/dessert/dessert-6.jpg" alt="">
      </div>
    </div>
  </section>


  <section class="about-services">
    <div class="row-1 ">
      <div class="col-1">
        <img src="../assets/images/delivery-guy-2.svg" alt="" />
      </div>
      <div class="col-1">
        <h2>Take a look at the benefits we offer for you</h2>
        <p>
          Good service means a friendly, welcoming service. A restaurant owner
          should not merely strive to avoid bad service,
        </p>
        <div class="d-grid">
          <div class="card">
            <img src="../assets/images/car-icon.svg" alt="" />
            <h4>Free Home Delivary</h4>
            <span>For all orders over $50</span>
          </div>
          <div class="card">
            <img src="../assets/images/dollar-icon.svg" alt="" />
            <h4>Return & Refund</h4>
            <span>Money Back Guarantee</span>
          </div>
          <div class="card">
            <img src="../assets/images/security-icon.svg" alt="" />
            <h4>Secure Payment</h4>
            <span>100% Secure Payment</span>
          </div>
          <div class="card">
            <img src="../assets/images/time-icon.svg" alt="" />
            <h4>Quality Support</h4>
            <span>Alway Online 24/7</span>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!--=============== App ===============-->
 <section class="app">
  <div class="row-2 container">
    <div class="col-2">
      <div class="circle">
        <div class="inner-circle"></div>
        <img src="../assets/images/mobile.png" alt="hi">
      </div>
    </div>
    <div class="col-2">
      <h2>
        Never Feel Hungry! Download Our Mobile App Order Delicious Food
      </h2>
      <p>
        Online ordering has enabled many restaurants to manage their peak
        business hours very effectively.
      </p>
      <div class="d-flex">
        <a href="https://www.apple.com/in/app-store/" target="_blank">

          <img src="../assets/images/app-store.png" alt="">
        </a>

        <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank">

          <img src="../assets/images/image.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

:root {
  --primary-color: #f94a3d;
  --yellow-color: #ffcf03;
  --black-color: #212244;
  --default-color: #69697b;
  --deep-yellow: #ff9401;
  --yellow-color-1: #ffe507;
  --red-color-1: #e83b2e;
  --red-color-2: #ee3e32;
  --light-red-color: #fdecec;
  --grey-color: #eaeaea;
  --grey-color-1: #a19292;
  --white-color: #fff;
  --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-section {
  padding: 2rem 9%;
}

.about-section .about-content {
  display: flex;
  width: 100%;

}

.about-section .about-content img {
  background-color: rgb(249, 249, 249);
}

.about-section .about-content .about-content-text {
  font-size: 16px;
  padding-left: 50px;
}

.about-section img {
  width: 60vw;
  height: 20vw;
  transition: transform 1s ease;

}

.about-section img:hover {
  transform: scale(1.1);
}

.about-section .about-article {
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  background-color: #27ae60;
  width: 100%;
}

.about-section .about-article h3 {
  font-family: 'Satisfy', cursive;
  font-size: 32px;
  color: white;
}


.about-section .gallery {
  overflow: hidden;
  padding: 100px;
}

.about-section .gallery .wrapper {
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}


.about-section .gallery .wrapper img {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  transform: scale(1);
  transition: all .25s;
  border: 2px solid orange;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
  grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
  z-index: 2;
  transform: scale(1.4);
}

@media (max-width: 768px) {
  .about-section .about-content img {
    width: 250px;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(1.5);
  }
}

@media (max-width: 576px) {
  .about-section .about-content img {
    width: inherit;
  }

  .about-section .about-content {
    display: block;
  }

  .about-section .about-content .about-content-text {
    padding-left: 0px;
  }

  .about-section .gallery {
    padding: 50px 0px;
  }

  .about-section .gallery .wrapper img {
    max-width: 100%;

  }

  .about-section .gallery .wrapper {
    grid-gap: 2vmin;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(1.3);
  }
}

/* ========== about-services =========== */


  .about-services {
    background-color: var(--grey-color-1);
    /* border: 2px solid red; */
    padding: 4rem 0;
  }
  
  .row-1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 7rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .col-1:first-child {
    text-align: center;
    transition: all 0.3s ease;
    /* padding: 120px; */
    /* border: 2px solid red; */
  }
  
  .col-1:first-child:hover {
    /* border: 2px solid green; */
  }
  
  .col-1:first-child img {
    height: 400px;
    transition: transform 3s ease;
    margin-left: -140px;
  }
  
  .col-1:first-child:hover img {
    background-color: yellow;
    transform: translateX(245px);
  }
  
  .col-1:last-child {
    border: 2px solid grey;
    border-radius: 6px;
    padding: 30px;
    min-width: 600px;
    margin: 0 auto;
  }
  
  
  .col-1 h2 {
    /* border: 2px solid red; */
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--black-color);
  }
  
  .col-1 p {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .d-grid {
    display: grid;
    /* border: 2px solid red; */
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: var(--box-shadow);
  }
  
  .card:hover {
    transform: translateY(-5px);
    background-color: rgba(207, 201, 201, 0.9);
  }
  
  .card img {
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .card h4 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }
  
  .card span {
    font-size: 1.3rem;
    color: #666;
  }
  
  /* Responsive Design */
  @media (max-width: 992px) {
    .col-1:first-child img{
      border: 2px solid gold;
      margin-left: 43px;
    }
    .row-1 {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .col-1:first-child img {
      height: 300px;
    }
    
    .col-1:last-child {
      padding: 15px 20px;
    }
  }
  
  @media (max-width: 768px) {
    .d-grid {
      grid-template-columns: 1fr;
    }
    
    .col-1 h2 {
      font-size: 2.7rem;
    }
    
    .card {
      padding: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .col-1:first-child img {
      height: 250px;
    }
    
    .about-services {
      padding: 2rem 0;
    }
  }



 /* ========== APP SECTION =========== */
.app {
  padding: 10rem 5% 20rem;
  /* border: 2px solid red; */
  width: 90%;
  margin: auto;
}

/* ROW: Flexbox for better alignment */
.app .row-2 {
  background-color: #f94a3d;
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  flex-wrap: wrap;
}

/* LEFT COLUMN (Image & Circle) */
.app .row-2 .col-2:first-child {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app .row-2 .col-2:first-child .circle {
  border-radius: 50%;
  height: 40rem;
  width: 40rem;
  border: 3rem solid #e83b2e;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-2{
  margin: 0 auto;
}

.app .row-2 .col-2:first-child .circle .inner-circle {
  border-radius: 50%;
  height: 26rem;
  width: 26rem;
  border: 8rem solid #ee3e32;
}

.app .row-2 .col-2:first-child .circle img {
  position: absolute;
  top: 60%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 33rem;
}

/* RIGHT COLUMN (Text & Buttons) */
.app .row-2 .col-2:last-child {
  flex: 1;
  max-width: 500px;
  text-align: left;
}

.app .row-2 .col-2:last-child h2 {
  color: #fff;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.app .row-2 .col-2:last-child p {
  color: #fff;
  margin-bottom: 2rem;
}

.app .row-2 .col-2:last-child .d-flex {
  display: flex;
  gap: 2rem;
}

.app .row-2 .col-2:last-child .d-flex img {
  width: 150px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.app .row-2 .col-2:last-child .d-flex img:hover {
  transform: scale(1.1);
}

/* ========== RESPONSIVENESS ========== */
@media (max-width: 1200px) {
  .app .col-2{
    margin-bottom: 40px;
  }
  .app .row-2 {
    padding: 3rem;
    flex-direction: column;
    text-align: center;
  }

  .app .row-2 .col-2:first-child .circle {
    height: 30rem;
    width: 30rem;
  }

  .app .row-2 .col-2:first-child .circle img {
    width: 25rem;
  }

  .app .row-2 .col-2:last-child h2 {
    font-size: 3rem;
  }
  .inner-circle{
    border: 4rem solid #ee3e32;
  }
}

@media (max-width: 996px) {
  .app {
    padding: 10rem 5% 10rem;
    height: auto;
  }

  .app .row-2 .col-2:first-child {
    display: none;
  }

  .app .row-2 .col-2:last-child {
    width: 100%;
    text-align: center;
  }

  .app .row-2 .col-2:last-child h2 {
    font-size: 3rem;
  }

  .app .row-2 .col-2:last-child .d-flex {
    justify-content: center;
  }
  .inner-circle{
    border: 4rem solid #ee3e32;
  }
}

@media (max-width: 567px) {
  .col-2{
    margin-bottom: 20px;
  }
  .app .row-2 .col-2:last-child h2 {
    font-size: 2.5rem;
  }

  .app .row-2 .col-2:last-child .d-flex img {
    width: 120px;
  }
  .inner-circle{
    border: 4rem solid #ee3e32;
  }
}
 
</style>