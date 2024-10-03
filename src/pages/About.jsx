export default function About(){
    return(<>
    
    <section class="about-header">
    </section>

    <section id="about-head" class="section-p1">
      <img src="/img/about/a6.jpg" alt="" />
      <div>
        <h2>#Who we Are</h2>
        <p>
        NexCart is an e-commerce platform designed to address the challenges faced by small and medium-sized businesses entering the online marketplace. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring scalability, security, and a seamless user experience. The project aims to provide merchants with a customizable and easy-to-manage online store, while customers benefit from a user-friendly shopping experience with secure payment and shipping options.

        </p>
        <abbr title=""></abbr>
        <br /><br />
        <marquee
          bgcolor="#ccc"
          loop="-1"
          scrollamount="5"
          width="100%"
          behavior=""
          direction=""
          >NexCart is an e-commerce platform designed to address the challenges
          </marquee>
      </div>
    </section>

    <section id="about-app" class="section-p1" >
        <h1>Download our <a href="#">App</a></h1>
        <div class="video">
            <video autoplay muted loop src="img/about/1.mp4"></video>
        </div>
    </section>

    <section id="feature" class="section-p1" >

        <div class="fe-box">
            <img src="/img/features/f1.png" alt=""/>
            <h6>Free Shiping</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f2.png" alt=""/>
            <h6>Fast Delivery</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f4.png" alt=""/>
            <h6>Easy Order</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f5.png" alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
            <img src="/img/features/f6.png" alt=""/>
            <h6>24/7 Support</h6>
        </div>
    </section>

    <section id="newsLetter" class="section-p1 section-m1" >
        <div class="newstext">
         <h4>Sign Up For newsLetter</h4>
         <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
         <input type="text" placeholder="your E-mail address"/>
         <button class="normal" >submit</button>
        </div>
     </section>

    </>)
}