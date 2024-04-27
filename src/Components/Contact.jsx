import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen text-gray-300 flex justify-center p-4 items-center pt-[10rem]">
      <form
        method="POST"
        action="https://getform.io/f/pbqgqxkb"
        className="flex max-w-[600px] flex-col w-full "
      >
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 font-bold border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - myemail@email.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2  text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
