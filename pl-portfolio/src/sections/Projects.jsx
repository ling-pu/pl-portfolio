// src/sections/About.jsx
import { useState } from 'react';
import { images } from '../data/images';


export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (img) => {
        setSelectedImage(img);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };
    return (
        <section className="projects">

            {/* <h2 className="text-3xl font-bold mb-4">Projects</h2> */}
            {images.map((img, idx) => (
                <div key={idx}
                    onClick={() => openLightbox(img)}
                    className="project-item"
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                    />
                    <div className="txt">
                        <h3>{img.alt}</h3>
                        <p>{img.year}</p>
                    </div>

                </div>
            ))}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="lightbox-close" onClick={closeLightbox}>×</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <h3 className="caption">{selectedImage.alt}</h3>
                    </div>
                </div>
            )}
        </section>
    );
}
