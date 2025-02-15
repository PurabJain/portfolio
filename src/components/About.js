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
                Greetings! I'm Purab, take a moment to explore the wonders
                within.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
