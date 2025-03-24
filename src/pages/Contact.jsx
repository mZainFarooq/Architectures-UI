import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-8">
      <div className="py-4">
        <h1 className="py-8">Contact</h1>
        <hr className=" border-gray-200" />
      </div>
      <div>
        <p>Lets get in touch and talk about your next project.</p>
        <form className="py-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full py-2 px-4 border border-gray-300 "
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 border border-gray-300 "
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-2 px-4 border border-gray-300 "
              required
            />
            <input
              type="text"
              placeholder="Comment"
              className="w-full py-2 px-4 border border-gray-300 "
              required
            />

            <button
              type="submit"
              className="cursor-pointer bg-black text-white py-2 px-4 w-40 inline-block hover:bg-gray-400 hover:text-black"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="py-8">
        <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
      </div>
    </section>
  );
};

export default Contact;
