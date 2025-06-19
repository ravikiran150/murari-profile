import React from 'react';
import { Link } from 'react-router-dom';

const Videos: React.FC = () => {
  // Example video data (replace with real data or embed links as needed)
  const videos = [
    {
      title: 'Event 1 - Ritual Ceremony',
      url: 'https://www.youtube.com/embed/VIDEO_ID_1',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/0.jpg',
    },
    {
      title: 'Event 2 - Spiritual Talk',
      url: 'https://www.youtube.com/embed/VIDEO_ID_2',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    },
  ];

  return (
    <section className="section-padding min-h-screen bg-white dark:bg-gray-900">
      <div className="container-max">
        <Link to="/" className="btn-secondary mb-8 inline-block">&larr; Back to Home</Link>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="card flex flex-col items-center">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
              </a>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">{video.title}</h3>
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="200"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos; 