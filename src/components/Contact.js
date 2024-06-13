import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Address | ठेगाना</h2>
      <p>139-22 87th Dr, Jamaica NY 11435</p>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.916622228239!2d-73.80945458428835!3d40.70452747933195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ff20720a75%3A0xa0c31e3e5c43a20a!2s139-22%2087th%20Dr%2C%20Jamaica%2C%20NY%2011435%2C%20USA!5e0!3m2!1sen!2snp!4v1622103990342!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;