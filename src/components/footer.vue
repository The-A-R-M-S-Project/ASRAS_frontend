<template>
  <div class="container-fluid">
    <div class="row footer-top">
      <div class="col-sm-4 text-center">
        <h4 class="ft-text-title">Media Name</h4>
        <h6 class="ft-desp">The ARMS Project <br />Uganda-Kampala</h6>
        <h4 class="details">
          <a class="contact" href="tel:+256 703894032">
            <i class="fa fa-phone" aria-hidden="true"></i> +256-703-894032</a
          >
        </h4>
      </div>
      <div class="col-sm-4 text-center border-left">
        <h4 class="ft-text-title">Our Team</h4>
        <div class="address-member">
          <p class="member"><b>Director One</b> : Dr. Andrew Katumba</p>
          <p class="member"><b>Director two</b> : Dr. Jonathan Sserugunda</p>
          <p class="member"><b>Developer</b> : Eng. Edwin Suubi Kitta</p>
          <p class="member"><b>Developer</b> : Eng. Benjamin Bwowe</p>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12 text-center border-left">
        <h4 class="ft-text-title">About</h4>
        <div class="pspt-dtls">
          <router-link to="/About">
            <h6 class="about">About</h6>
          </router-link>
          <router-link to="about">
            <h6 class="team">Team</h6>
          </router-link>
          <router-link to="/ContactUS">
            <h6 class="contactus">ContactUS</h6>
          </router-link>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
    <div class="row ft-copyright pt-2 pb-2" style="padding-left: 25px;">
      <div class="col-sm-4 text-pp-crt-rg">
        copyright @2020 All Rights Reserved
      </div>
      <div class="col-sm-4 developer">
        <a
          href="https://rmcts.herokuapp.com"
          target="_blank"
          class="text-pp-crt"
          >Check-out : <b>R</b>MC<b>T</b>S</a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.ft-copyright {
  background-color: #000a1f;
  border-top: 1px solid #121d6d;
  display: flex;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
}

.footer-top {
  background-color: #012061;
  border-bottom: 1px solid rgba(25, 52, 132, 0.64);
}

.text-center {
  text-align: center !important;
}

h4.ft-text-title {
  color: #fff;
  margin: 20px 0 10px;
  font-weight: 700;
  text-align: center;
}

h4 {
  display: block;
  -webkit-margin-before: 1.33em;
  -webkit-margin-after: 1.33em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
  font-size: 1.3em;
}

h6.ft-desp {
  color: #fff;
  padding: 2px;
}

h6 {
  font-size: 15px;
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1.heading-title a {
  color: #012061 !important;
  text-decoration: none;
}
h1 {
  font-size: 22px;
  font-weight: 800;
  line-height: 1.4;
  color: #000;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 10px;
}
a.contact,
a.mail {
  border: 1px solid yellow;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: #fff;
  padding: 5px;
  font-size: 15px;
  text-decoration: none;
}

a.contact:hover,
a.mail:hover {
  background: #900;
}

i.fa-phone,
i.fa-envelope-o {
  padding: 3px;
}

i.fa-envelope-o {
  padding: 4px;
}

.border-left {
  border-left: dotted #ddd 1px;
}

.pspt-dtls {
  margin-top: 20px !important;
}

.pspt-dtls a {
  margin: 8px !important;
}

a.about,
a.team,
a.contactus {
  padding: 8px;
  border: 1px yellow solid;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

a.about:hover,
a.team:hover,
a.contactus:hover {
  background: #900;
}

footer p {
  color: #fff;
  margin-bottom: 10px;
}

.text-pp-crt,
.text-pp-crt-rg {
  color: #ffffff;
}

.developer {
  text-align: center;
}
p.member {
  color: #fff;
}
i.develop {
  border: 1px red dotted;
}

.developer b {
  color: red;
}
</style>
<script>
export default {
  name: "footer"
};
</script>
