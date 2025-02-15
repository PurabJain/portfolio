import React from "react";
import coinbasebg from "../../assets/projects/coinbasebg.png";

const Coinbase = () => {
  const coinbaseBlue = "#3773f5";

  return (
    <div className="w-full bg-black">
      <div className="w-full h-full flex flex-col justify-center place-items-center lg:flex-row">
        {/* coinbasebg for larger devices */}
        <div className="hidden lg:flex lg:flex-0.5 justify-center place-items-center">
          <div className="flex justify-center items-center p-10">
            <div className="bg-white rounded-lg shadow-lg shadow-slate-500 p-1">
              <img
                src={coinbasebg}
                alt="coinbase-background"
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full lg:flex-0.5 bg-black">
          {/* flex-col */}
          <div className="flex w-full h-full flex-col">
            {/* coinbasebg for smaller devices */}
            <div className="lg:hidden flex justify-center items-center p-10">
              <div className="bg-white rounded-lg shadow-lg shadow-slate-500 p-2">
                <img
                  style={{ width: "500px" }}
                  src={coinbasebg}
                  alt="coinbase-background"
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="w-full lg:mt-10 px-10 lg:text-left text-center">
              <p className="font-bold text-4xl" style={{ color: coinbaseBlue }}>
                Coinbase Crypto Exchange App
              </p>
            </div>
            <div className="w-full mt-5 px-10 text-white">
              <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                <li>
                  Crafted and executed a Coinbase application that prioritizes
                  robust authentication through MetaMask, facilitates token
                  minting via thirdWeb, and utilizes the headless CMS sanity.io
                  as a database and hosted the project on Vercel.
                </li>
                <li>
                  Employed Next.js, React, and Styled Components to engineer an
                  intuitive and visually captivating front-end interface (UI).
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-row flex-wrap mt-5 ml-5 px-5 lg:justify-start justify-center text-white">
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">JavaScript</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">React</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">HTML5</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">CSS</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">MetaMask</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">Sanity</p>
              </div>
              <div
                className="rounded-full my-1 mr-5 place-items-center justify-center flex"
                style={{
                  height: "auto",
                  width: "100px",
                  backgroundColor: "#02112f",
                }}
              >
                <p className="p-3">Vercel</p>
              </div>
            </div>
            {/* flex-row button */}
            <div className="flex flex-row w-full justify-center place-items-center py-5 mt-3">
              <div className="coinbase-btns">
                <a
                  href="https://drive.google.com/file/d/15ILFoGIL8ZWD1T_q5UsDoplcF5fSmGbx/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 w-full h-full text-center font-bold text-xl text-white"
                >
                  Demo
                </a>
              </div>
              <div className="coinbase-btns">
                <a
                  href="https://github.com/PurabJain/coinbase-blockchain-app"
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
      </div>
    </div>
  );
};

export default Coinbase;
