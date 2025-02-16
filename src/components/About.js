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
<<<<<<< HEAD
                Greetings! I'm Purab, take a moment to explore the wonders
                within.
=======
                Greetings! I'm Purab, Feel free to explore my work and discover the projects that reflect my passion and expertise!
>>>>>>> 451cfa7 (Changes made to add OKX experience)
              </p>
            </div>
            <div className="text-center md:text-left">
              <p>
<<<<<<< HEAD
                With{" "}
                <span className="in-between-span-tags">
                  1.5+ years of experience
                </span>{" "}
                as a software developer, I have a proven track record of
                optimizing processes and delivering innovative solutions. My
                achievements include saving{" "}
                <span className="in-between-span-tags">$28,000 </span>
                reducing product development time by{" "}
                <span className="in-between-span-tags">36%</span>, and
                decreasing overhaul time by{" "}
                <span className="in-between-span-tags">40%</span>. I excel at
                collaborating with cross-functional teams, effectively
                communicating complex ideas, and adapting to new technologies.
                Let me be the catalyst that propels your organization forward,
                crafting{" "}
                <span className="in-between-span-tags">
                  high-quality software solutions
                </span>{" "}
                that enhance efficiency and drive innovation. Together, we can
                shape a successful future in the digital era.
              </p>
              {/* <p>
                I'm a software developer with a proven track record in
                optimizing processes and delivering innovative solutions. I
                understand the transformative power of software and its impact
                on business success. With a blend of technical expertise and
                strong interpersonal skills, I excel at collaborating with
                cross-functional teams, effectively communicating complex ideas,
                and adapting to new technologies. Let me help your organization
                thrive in the digital era by creating high-quality software
                solutions that enhance efficiency and drive innovation.
              </p> */}
=======
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
>>>>>>> 451cfa7 (Changes made to add OKX experience)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
