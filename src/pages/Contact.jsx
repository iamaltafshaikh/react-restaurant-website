function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us 📞</h1>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 foodie@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
