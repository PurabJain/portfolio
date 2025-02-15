import Coinbase from "./project items/Coinbase";
import EventsFinder from "./project items/EventsFinder";
import EventsFinderMobile from "./project items/EventsFinderMobile";
import UberEats from "./project items/UberEats";
const Projects = () => {
  

  return (
    <div
      name="projects"
      className="w-full flex flex-col justify-center place-items-center bg-black"
      style={{ height: "auto" }}
    >
      <div className="py-10 md:py-20 mt-10">
        <p
          className="text-3xl md:text-5xl font-bold inline border-b-4 bright-text"
          style={{ borderBottomColor: "#1F2833" }}
        >
          Projects
        </p>
      </div>
      <Coinbase />
      <UberEats />
      <EventsFinder />
      <EventsFinderMobile />
    </div>
  );
};

export default Projects;
