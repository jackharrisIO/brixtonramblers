import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>If you would</strong> like to chat with us with a view to joining Freemasonry, or the Brixton Ramblers Lodge in particular, drop us a message. We're a friendly bunch and always happy to help.
        </p>
        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="bot-field" />
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
                required
              />
            </div>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
