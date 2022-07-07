import React from "react";
import "./contact.scss";
function Contact() {
  return (
    <section className="contact" id="contactus">
      <div className="section__contact container">

        <div className="contact__wrapper-information">
          <h3 className="company__name">MChJ «JAYKHUN DEVELOPERS»</h3>
          <div className="section__contact-line">
            <div className="section__contact-subline"></div>
          </div>
          <p className="contact__paragraph">Manzil:</p>
          <span className="address">
            Toshkent sh., O'zar ko`chasi, 63-uy
          </span>
          <p className="contact__paragraph">Telefon raqami:</p>
          <span className="contact__number">+998974657004</span>
          <p className="contact__paragraph">Ish vaqti:</p>
          <span className="contact__working-day">Dushanba - Shanba</span>
          <span className="contact__working-hours">09:00 - 18:00</span>
        </div>

        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.543142626221!2d69.1727799!3d41.2752822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a9c7d09ed%3A0x20882997ae136315!2z0JrQvtC80L_QsNC90LjRjyBBS0ZB!5e0!3m2!1sru!2s!4v1656307196891!5m2!1sru!2s"
            width="800"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
