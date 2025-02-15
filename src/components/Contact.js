import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import successAnimation from "../assets/animations/successfully-done.json";

const Contact = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   // here is where we will declare lottie animation
  //   // "animation" is what we imported before animationData: animation,
  //   animationData: successAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    emailjs
      .sendForm(
        "service_hyjiykm",
        "template_ea4kixi",
        formRef.current,
        "7pH8jBkXMyrp_g3gP"
      )
      .then(
        (response) => {
          console.log(response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsFormSubmitted(true);
  };

  return (
    <div name="contact" className="w-full h-screen bg-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-row w-full h-full">
          {/* <Skills /> */}
          <div className="flex h-full w-full justify-center place-items-center">
            <div className="flex flex-col justify-center place-items-center w-full">
              <div className="flex justify-center place-items-center w-full">
                {isFormSubmitted ? (
                  <>
                    <p className="text-3xl md:text-5xl mt-10 font-bold inline py-1 text-green-400">
                      {" "}
                      Thank you. I'll reply soon.
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="text-3xl md:text-5xl mt-10 font-bold inline py-1 border-b-4 bright-text"
                      style={{ borderBottomColor: "#1F2833" }}
                    >
                      {" "}
                      Contact
                    </p>
                  </>
                )}
              </div>
              <div className="flex justify-center mt-10 place-items-center w-full">
                {isFormSubmitted ? (
                  <>
                    <div className="flex flex-col justify-center place-items-center w-full">
                      {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
                        <Lottie
                          animationData={successAnimation}
                          loop={true}
                          style={{ height: "250px", width: "250px" }}
                        />
                      <button
                        onClick={() => setIsFormSubmitted(false)}
                        className="text-white border-2 hover:bg-[#66FCF1] hover:border-[#66FCF1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center"
                      >
                        Send another
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <form
                      ref={formRef}
                      onSubmit={formSubmit}
                      className="flex max-w-[800px] px-5 md:px-0 flex-col w-full"
                    >
                      <input
                        required
                        id="form_name"
                        className="bg-[#131313] p-2 text-white"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />

                      <input
                        id="form_subject"
                        className="mt-4 bg-[#131313] p-2 text-white"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <input
                        required
                        id="form_email"
                        className="my-4 p-2 bg-[#131313] text-white"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <textarea
                        required
                        id="form_message"
                        className="bg-[#131313] p-2 text-white"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <button className="text-white border-2 hover:bg-[#66FCF1] hover:border-[#66FCF1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center">
                        Let's Collaborate
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Skills from "./Skills";

// const Contact = () => {
//   const formRef = useRef();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       // If any of the required fields are empty, set the form as submitted and return
//       setIsFormSubmitted(true);
//       return;
//     }

//     emailjs
//       .sendForm(
//         "service_hyjiykm",
//         "template_ea4kixi",
//         formRef.current,
//         "7pH8jBkXMyrp_g3gP"
//       )
//       .then(
//         (response) => {
//           console.log(response.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     // Reset the form data and set the form as submitted
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setIsFormSubmitted(true);
//   };

//   return (
//     <div name="contact" className="w-full h-screen bg-black">
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="flex flex-row w-full h-full">
//           {/* <Skills /> */}
//           <div className="flex h-full w-full justify-center place-items-center">
//             <div className="flex flex-col justify-center place-items-center w-full">
//               <div className="flex justify-center place-items-center w-full">
//                 <p
//                   className="text-3xl md:text-5xl mt-10 font-bold inline py-1 border-b-4 bright-text"
//                   style={{ borderBottomColor: "#1F2833" }}
//                 >
//                   {" "}
//                   Contact
//                 </p>
//               </div>
//               <div className="flex justify-center mt-10 place-items-center w-full">
//                 <form
//                   ref={formRef}
//                   onSubmit={formSubmit}
//                   className="flex max-w-[800px] px-5 md:px-0 flex-col w-full"
//                 >
//                   <input
//                     id="form_name"
//                     className={`bg-[#131313] h-12 p-2 text-white ${
//                       isFormSubmitted && !formData.name ? "border-red-500" : ""
//                     }`}
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />

//                   <input
//                     id="form_subject"
//                     className={`mt-4 bg-[#131313] h-12 p-2 text-white ${
//                       isFormSubmitted && !formData.subject ? "border-red-500" : ""
//                     }`}
//                     type="text"
//                     placeholder="Subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                   <input
//                     id="form_email"
//                     className={`my-4 p-2 h-12 bg-[#131313] text-white ${
//                       isFormSubmitted && !formData.email ? "border-red-500" : ""
//                     }`}
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <textarea
//                     id="form_message"
//                     className={`bg-[#131313] p-2 text-white ${
//                       isFormSubmitted && !formData.message ? "border-red-500" : ""
//                     }`}
//                     name="message"
//                     rows="8"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                   <button className="text-white border-2 hover:bg-[#66FCF1] hover:border-[#66FCF1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center">
//                     Let's Collaborate
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
