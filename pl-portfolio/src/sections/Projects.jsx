// src/sections/About.jsx
import { images } from '../data/images';

export default function Projects() {
    return (
        <section className="projects">

                {/* <h2 className="text-3xl font-bold mb-4">Projects</h2> */}
                {images.map((img, idx) => (
                    <div key={idx}>
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
        </section>
    );
}
