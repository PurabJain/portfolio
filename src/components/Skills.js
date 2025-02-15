import bgskills from '../assets/bgskills.jpg';
const Skills = () => {
  return (
    <div name="skills" className="flex h-screen w-full flex-col bg-black justify-center place-items-center md:px-4" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgskills})`}}>
      <p className="text-3xl md:text-5xl font-bold inline py-1 border-b-4 bright-text"
              style={{ borderBottomColor: "#1F2833" }}>
        {" "}
        Overview of my skills
      </p>

      <div class="flex w-full md:w-[70%] justify-center place-items-center mt-10 py-2 px-5 md:px-0">
        <div class="bg-[#131313] w-full text-center card py-5 px-10">
          <h4 class="font-bold text-xl md:text-2xl text-white font-mono">
            Programming Languages
          </h4>
          <p class="text-[#bcbcbc] font-mono">
            C/C++, Python, Java, JavaScript, TypeScript, SQL
          </p>
        </div>
      </div>
      <div class="flex w-full md:w-[70%] justify-center place-items-center py-2 px-5 md:px-0">
        <div class="bg-[#131313] w-full text-center card py-5 px-10">
          <h4 class="font-bold text-xl md:text-2xl text-white font-mono">
            Mobile and Web Technologies
          </h4>
          <p class="text-[#bcbcbc] font-mono">
            React, React Native, HTML/HTML5, CSS, PHP, RESTful API, Redux,
            Android-Java, Spring boot, AdobeXD, Ajax, Angular, Node.js, Next.js,
            Flask, Bootstrap, Express.js, Google Cloud Platform
          </p>
        </div>
      </div>
      <div class="flex w-full md:w-[70%] justify-center place-items-center py-2 px-5 md:px-0">
        <div class="bg-[#131313] w-full text-center card py-5 px-10">
          <h4 class="font-bold text-2xl text-white font-mono">Databases</h4>
          <p class="text-[#bcbcbc] font-mono">
            MySQL, PostgreSQL, Google Firebase (NoSQL)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
