export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I specialize in computer diagnostics, efficiently identifying and resolving hardware issues to ensure optimal system performance. As a proficient internet cafe manager, I prioritize customer satisfaction by overseeing their needs. 
          </p>
          <p className="hero--section-description">
          As a degree holder in computer science, I also have a background in Web and Software Development and I'm confident in working with various technologies, including:
          </p>
          <div className="ul--tech">          
          <ul>
          <li><img src="./img/Html5.png" alt="TechStack HTML" /> <p>HTML</p> </li>
          <li><img src="./img/css.png" alt="TechStack CSS" /> <p>CSS</p> </li>
          <li><img src="./img/js.png" alt="TechStack JavaScript" /> <p>JavaScript</p> </li>
          <li><img src="./img/react.png" alt="TechStack React" /> <p>React</p> </li>
          <li><img src="./img/figma.png" alt="TechStack Figma" /> <p>Figma</p> </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
