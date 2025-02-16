import React from "react";
import homepagebg from "../assets/home-flipped-bg.png";
import Typed from "typed.js";
import avatar from "../assets/Portfolio Avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Full Stack Developer",
        "A Software Engineer",
        "A Mobile and Web App Developer",
        "A Blockchain Enthusiast",
      ],
      typeSpeed: 50,
      loop: true,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen bg-cover flex justify-center md:justify-start items-center"
      style={{ backgroundImage: `url(${homepagebg})` }}
    >
      <div className="flex flex-col items-center mt-5 md:mt-[80px] md:items-start md:ml-[10%]">
        <div
          className="home-avatar mb-10"
          style={{ borderRadius: "50%", height: "250px", width: "250px" }}
        >
          <img
            src={avatar}
            alt="avatar"
            style={{ height: "100%", width: "100%", borderRadius: "50%", objectFit: "cover" }}
          />
        </div>

        <p className="text-gray-300 text-xl md:text-4xl mb-5 font-mono">
          Hi there 👋, I'm
        </p>
        <h3 className="bright-text font-bold text-3xl md:text-7xl mb-1 font-mono">
          PURAB ALOK JAIN
        </h3>
        <div className="text-xl md:text-3xl light-gray-text font-mono">
          <span ref={el} />
          {/* <Typed
            strings={[
              "A Full Stack Developer",
              "A Software Engineer",
              "A Mobile and Web App Developer",
              "A Blockchain Enthusiast",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
            className="text-[#b2afb1]"
          ></Typed> */}
        </div>
        <div className="flex flex-row gap-5 md:gap-10 mt-8">
          {/* <div className="flex w-full flex-col justify-center icon place-items-center">
            <a
              className="flex flex-col place-items-center justify-center p-4"
              href="https://github.com/PurabJain"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="#66FCF1" size={24} />
              <p className="text-[#66FCF1] font-mono">GitHub</p>
            </a>
          </div> */}
          <div className="flex flex-col justify-center place-items-center">
            <a
              className="flex flex-col place-items-center justify-center"
              href="https://www.linkedin.com/in/purabjain/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#66FCF1" size={24} />
              <p className="text-[#66FCF1] font-mono">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
