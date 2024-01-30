import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jc Miguel</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web Developer</span>{" "}
          </h1>
          <p className="hero--section-description">
          An aspiring Software Engineer with hands-on experience in web development,
          looking for an entry-level opportunity to bring creativity and user-friendly
          solutions to software projects
          </p>
        </div>
        <a className="btn btn-primary" href="./img/resume.pdf" download>Download Resume</a>
      </div>
      <div className="box">
      <div className="hero--section--img">
        <div className="content">
        <img src="./img/aboutme2.jpg" alt="Hero Section" />
        <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content text-md"
              >
              </Link>
        {/* <span> SOMEONE FAMOUS </span><span>Front-end Developer</span>
        <a className="btn btn-primary" href="./img/resume.pdf" download>Download Resume</a> */}
      </div>
      </div>
      </div>
    </section>
  );
}
