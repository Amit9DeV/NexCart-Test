export default function Contact() {
  return (
    <>
      <section id="contact-header"></section>

      <section id="contact-details" class="section-p1">
        <div class="details bg-black p-10">
          <span>GET IN TOUCH</span>
          <h2>Visit one Pf our agency or contact us today</h2>
          <h3>Head Office of NexCart</h3>
          <div>
            <li class="fal fa-map"></li>
            <p className="">
              A-1 UPSIDC Industrial Area, Rooma Kanpur, 208001 (UP)
            </p>
          </div>
          <div>
            <li class="far fa-envelope"></li>
            <p>
              For any inquiries, assistance, or feedback, we are available 24/7
              to help you: Phone: 0987763516
            </p>
          </div>
          <div>
            <li class="fas fa-phone-alt"></li>
            <p>Email: Nexcart@gmail.com </p>
          </div>
        </div>

        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.6560522917666!2d80.4224448752755!3d26.369984476974835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4224d727667f%3A0xb4fca6542e514125!2sKanpur%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1727788398686!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>WE love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id=""></textarea>
          <button class="normal">submit</button>
        </form>

        <div class="people bg-black flex flex-col rounded-3xl p-5 items-center justify-center">
          <div>
            <img className="rounded-lg" src="img/people/1.jpg" alt="" />
            <p>
              <span className=" ">Amit Ram</span> MERN Developer
              <br />
              phone: +99999999990 <br /> E-mail:coud15333@gmail.com{" "}
            </p>
          </div>
          <div>
            <img className="rounded-lg" src="img/people/2.jpg" alt="" />
            <p>
              <span>Vipul Kumar</span> MERN Developer
              <br />
              phone: +99999999990 <br /> E-mail:newmember@gmail.com{" "}
            </p>
          </div>
          <div>
            <img className="rounded-lg" src="img/people/3.jpg" alt="" />
            <p>
              <span>Krishna Prajapati</span> Marketing Manger
              <br />
              phone: +99999999990 <br /> E-mail:newmember@gmail.com{" "}
            </p>
          </div>
          <div>
            <img className="rounded-lg" src="img/people/4.jpg" alt="" />
            <p>
              <span>Suresh Maurya</span> Backend Developer
              <br />
              phone: +99999999990 <br /> E-mail:newmember@gmail.com{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="newsLetter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up For newsLetter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="your E-mail address" />
          <button class="normal">submit</button>
        </div>
      </section>
    </>
  );
}
