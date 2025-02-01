import React from 'react';

const Map: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.903954874515!2d-69.91930025384305!3d18.473419993546816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf882d021d58d7%3A0x267145a3c176685b!2sMorrison%20Ingenieros!5e0!3m2!1sen!2sdo!4v1738252544257!5m2!1sen!2sdo"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
