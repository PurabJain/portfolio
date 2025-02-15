import ubereatsbg from "../../assets/projects/ubereatsbg.png";

const UberEats = () => {
  const ubereatsGreen = "#3fc060";
  return (
    <div className="w-full bg-black">
      <div className="w-full h-full flex flex-col justify-center place-items-center">
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
                      src={ubereatsbg}
                      alt="coinbase-background"
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="w-full lg:mt-10 px-10 lg:text-left text-center">
                  <p
                    className="font-bold text-4xl"
                    style={{ color: ubereatsGreen }}
                  >
                    Uber Eats Mobile App (iOS & Android)
                  </p>
                </div>
                <div className="w-full mt-5 px-10 text-white">
                  <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                    <li>
                      Developed a cross-platform Uber Eats food delivery app
                      using React Native, Redux, and Firebase, ensuring seamless
                      order management and an enhanced user experience.
                    </li>
                    <li>
                      Integrated Firebase for secure order storage, while
                      leveraging YELP API and Google API to provide
                      comprehensive restaurant listings and reliable location
                      services.
                    </li>
                  </ul>
                </div>

                {/* javascript, react native, redux, firebase, YELP API Google Places API  */}

                <div className="flex w-full flex-row flex-wrap mt-5 ml-5 px-5 lg:justify-start justify-center text-white">
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">JavaScript</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "auto",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">React Native</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">Redux</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">Firebase</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "100px",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">YELP API</p>
                  </div>
                  <div
                    className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                    style={{
                      height: "auto",
                      width: "auto",
                      backgroundColor: "#0c2412",
                    }}
                  >
                    <p className="p-3">Google Places API</p>
                  </div>
                </div>
                {/* flex-row button */}
                <div className="flex flex-row w-full justify-center place-items-center py-5 mt-3">
                  <div className="ubereats-btns">
                    <a
                      href="https://drive.google.com/drive/folders/1d6dRb6NklofS7PtlIBT6UlqcMcAJweXs?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 w-full h-full text-center font-bold text-xl text-white"
                    >
                      Demo
                    </a>
                  </div>
                  <div className="ubereats-btns">
                    <a
                      href="https://github.com/PurabJain/Uber-Eats-Clone"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 w-full h-full text-center font-bold text-xl text-white"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 0.5 */}
            <div className="hidden lg:flex lg:flex-0.5 justify-center place-items-center">
              <div className="flex justify-center items-center p-10">
                <div className="bg-white rounded-lg shadow-lg shadow-slate-500 p-1">
                  <img
                    src={ubereatsbg}
                    alt="coinbase-background"
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

export default UberEats;
