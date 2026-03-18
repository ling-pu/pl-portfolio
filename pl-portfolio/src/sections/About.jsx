// src/sections/About.jsx

export default function About() {
  return (
    <section className="about">
      <div className="box-text">
        <h2>Hello, I'm designer <span className="name">PL.</span></h2>
        <h3 className="text-gray-700 leading-relaxed">
          I’m a designer with a passion for front-end development.
          I love crafting intuitive UI with React and turning ideas into interactive experiences.
        </h3>
      </div>
      <div className="box-pic">
        <img src="./images/gallery6.png" alt="intro-picture" />
      </div>
    </section>
  );
}
