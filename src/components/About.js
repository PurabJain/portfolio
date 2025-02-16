import bgpj from "../assets/bgpj.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div
        className="w-full h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgpj})`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className="text-3xl md:text-5xl font-bold inline border-b-4 bright-text"
              style={{ borderBottomColor: "#1F2833" }}
            >
              About
            </p>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div></div>
          </div>
          <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4">
            <div className="text-xl md:text-3xl font-bold text-center md:text-right">
              <p>
                Greetings! I'm Purab, Feel free to explore my work and discover the projects that reflect my passion and expertise!
              </p>
            </div>
            <div className="text-center md:text-left">
              <p>
              I’m a software developer with{" "}
                <span className="in-between-span-tags">
                  1.5+ years 
                </span>{" "}
                of hands-on experience, and I love making things work better, faster, and smarter. At OKX, I helped boost user engagement by {" "}
                <span className="in-between-span-tags">50.7%  </span>
                and improved transaction conversions by {" "}
                <span className="in-between-span-tags">15.1%</span>—all while making the app run smoother with a {" "}
                <span className="in-between-span-tags">33% </span>faster API response time. I've also saved{" "}
                <span className="in-between-span-tags">
                $28,000
                </span>{" "}
                and shaved 36% off development time in past roles. I’m all about collaborating with teams, embracing new tech, and building solutions that really make a difference. 
                If you're looking for someone who can turn ideas into impactful software, let's create something awesome together!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
