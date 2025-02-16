import eventsfindermobilebg from "../../assets/projects/eventsfindermobilebg.png";
import { Link } from "react-scroll";
import { useState } from "react";
import notFound from "../../assets/animations/not-found.json";
import Lottie from "lottie-react";

const EventsFinderMobile = () => {
  const efmobile = "#5E9918";

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full bg-black">
      <div className="w-full h-full flex flex-col justify-center place-items-center">
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 mt-10 px-8 md:px-0 flex place-items-center justify-center bg-opacity-80 bg-gray-900">
            <div className="bg-black max-w-[500px] shadow-lg shadow-slate-600 p-8 rounded-lg text-white">
              {/* <Lottie options={defaultOptions} height={250} width={250} /> */}
              <div className="flex w-full justify-center place-items-center">
                <Lottie
                  animationData={notFound}
                  loop={true}
                  style={{ height: "250px", width: "250px" }}
                />
              </div>
              <p className="mt-5 font-mono">
                Thank you for showing interest in Events Finder Android
                Application. The code can be available on request as I can't
                publish it on any open source respositories.
              </p>
              <div className="h-[20px]"></div>
              <p className="font-mono">Contact me to get access of the code.</p>
              <div className="flex flex-row w-full gap-5">
                <button
                  className="w-full mt-8 px-4 py-2 bg-[black] text-white border-2 border-white hover:border-red-500 hover:text-red-500 rounded-lg"
                  onClick={closeModal}
                >
                  Close
                </button>
                <div className="hover:cursor-pointer w-full mt-8 px-4 py-2 flex justify-center place text-center font-bold bg-[#66FCF1] text-black rounded-lg">
                  <Link
                    className="w-full h-full"
                    onClick={() => closeModal()}
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex h-full w-full flex-0.5 bg-black">
          {/* row */}
          <div className="w-full h-full flex flex-row">
            {/* 0.5 */}
            <div className="flex w-full h-full flex-0.5 justify-center place-items-center">
              {/* flex-col */}
              <div className="flex w-full h-full flex-col">
                <div className="lg:hidden flex justify-center items-center p-10">
                  <div className="bg-white rounded-lg shadow-lg shadow-slate-500 p-1">
                    <img
                      style={{ width: "500px" }}
                      src={eventsfindermobilebg}
                      alt="efmobile-background"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="w-full lg:mt-10 px-10 lg:text-left text-center">
                  <p className="font-bold text-4xl" style={{ color: efmobile }}>
                    Events Finder Android App
                  </p>
                </div>
                <div className="w-full mt-5 px-10 text-white">
                  <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                    <li>
                      Designed an android mobile application featuring event
                      information from multiple APIs, including Ticketmaster and
                      Spotify, with a user-friendly interface and integrated
                      Google Maps API for venue locations.
                    </li>
                    <li>
                      Developed the application's backend using Node.js and
                      Express, implementing an efficient server-side
                      architecture. Additionally, introduced event
                      classification based on user preferences, ensuring users
                      can easily discover relevant activities. Furthermore,
                      integrated a favorites feature, enabling users to
                      conveniently track their preferred events.
                    </li>
                  </ul>
                </div>

                <div className="flex w-full flex-row flex-wrap mt-5 ml-5 px-5 lg:justify-start justify-center text-white">
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Java</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Android</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">XML</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Node.js</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Express.js</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "auto",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Ticketmaster API</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "auto",
                      backgroundColor: "#1b2b07",
                    }}
                  >
                    <p className="p-3">Spotify API</p>
                  </div>
                </div>
                {/* flex-row button */}
                <div className="flex flex-row w-full justify-center place-items-center py-5 mt-3">
                  <div className="efmobile-btns">
                    <a
                      href="https://drive.google.com/file/d/1x3Gg2bwLRatcmkh4Re10RHP38RJEPDU3/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 w-full h-full text-center font-bold text-xl text-white"
                    >
                      Demo
                    </a>
                  </div>
<<<<<<< HEAD
                  <div onClick={() => openModal()} className="efmobile-btns">
                    <p className="p-3 w-full h-full text-center font-bold text-xl text-white">
                      Code
                    </p>
                  </div>
=======
                  {/* <div onClick={() => openModal()} className="efmobile-btns">
                    <p className="p-3 w-full h-full text-center font-bold text-xl text-white">
                      Code
                    </p>
                  </div> */}
>>>>>>> 451cfa7 (Changes made to add OKX experience)
                </div>
              </div>
            </div>
            {/* 0.5 */}
            <div className="hidden lg:flex lg:flex-0.5 justify-center place-items-center">
              <div className="flex justify-center items-center p-10">
                <div className="bg-white rounded-lg shadow-lg shadow-slate-500 p-1">
                  <img
                    style={{ width: "1000px" }}
                    src={eventsfindermobilebg}
                    alt="efmobile-background"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFinderMobile;
