<template>
  <div class="myCarousel" style="position: relative">
    <div class="carousel-text">
      <h1 class="mytitle">Optimal, efficient and effective Scheduler</h1>
      <h4 class="carousel-text2">
        "Time is not the main thing, it is the only thing."
      </h4>
    </div>
    <div id="captions" class="carouselslide mycarousel" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#captions" data-slide-to="0" class="active"></li>
        <li data-target="#captions" data-slide-to="1"></li>
        <li data-target="#captions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/ss1.jpeg" class="d-block w-100" alt="CTF2" />
          <div class="carousel-caption d-none d-md-block">
            <h5>CTF1</h5>
            <p>
              Central Teaching Facility 2 near the College of Business and
              Management Sciences
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/ss2.jpeg" class="d-block w-100" alt="Side view" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Rare view</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/ss3.jpeg" class="d-block w-100" alt="Hind view" />
          <div class="carousel-caption d-none d-md-block">
            <h5>CTF2 Side</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#captions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#captions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.carousel-inner {
  min-height: 30vh;
  /* opacity: 0.6; */
  z-index: -1;
}
.carousel-text {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
}
.carousel-text2 {
  color: white;
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  font-weight: lighter;
  font-style: italic;
}
.mytitle {
  font-size: 40px;
  color: white;
  font-weight: lighter;
}
</style>

<script>
export default {
  name: "Carousel"
};
</script>
