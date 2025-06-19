import React from 'react';
import { Link } from 'react-router-dom';

const Images: React.FC = () => {
  // Example image data (replace with real images as needed)
  const images = [
    {
      caption: 'Event 1 - Ritual Ceremony',
      src: process.env.PUBLIC_URL + '/profile.jpg',
    },
    {
      caption: 'Event 2 - Group Photo',
      src: process.env.PUBLIC_URL + '/profile.jpg',
    },
  ];

  return (
    <section className="section-padding min-h-screen bg-white dark:bg-gray-900">
      <div className="container-max">
        <Link to="/" className="btn-secondary mb-8 inline-block">&larr; Back to Home</Link>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Images</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="card flex flex-col items-center">
              <img src={img.src} alt={img.caption} className="rounded-lg mb-4 w-full h-64 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">{img.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Images; 