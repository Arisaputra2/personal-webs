export default function SocialMedia() {
  return (
    <>
      <div className="social-media w-full flex flex-col box-border p-5 justify-center items-center border-2 border-gray mt-5 h-auto text-white bg-black">
        <div className="text-socialMedia row1 flex flex-row justify-evenly w-full">
          <a href="https://www.instagram.com/mhm_ari/" target="_blank">
            <p className="text-xl font-bold mb-10 p-5 rounded-full border-2 border-gray-500 hover:border-white hover:bg-gradient-to-b from-black to-gray-500 transform transition-ease-in-out hover:scale-110 duration-300">
              INSTAGRAM
            </p>
          </a>
          <a href="https://dribbble.com/mhm_ari" target="_blank">
            <p className="text-xl font-bold mb-10 p-5 rounded-full border-2 border-gray-500 hover:border-white hover:bg-gradient-to-b from-black to-gray-500 transform transition-ease-in-out hover:scale-110 duration-300">
              DRIBBLE
            </p>
          </a>
          <a href="https://linkedin.com/in/mhmari/" target="_blank">
            <p className="text-xl font-bold mb-10 p-5 rounded-full border-2 border-gray-500 hover:border-white hover:bg-gradient-to-b from-black to-gray-500 transform transition-ease-in-out hover:scale-110 duration-300">
              LINKEDIN
            </p>
          </a>
        </div>
        <div className="text-socialMedia row2 flex flex-row justify-evenly w-full">
          <a href="https://www.behance.net/mhm_ari" target="_blank">
            <p className="text-xl font-bold mb-10 p-5 rounded-full border-2 border-gray-500 hover:border-white hover:bg-gradient-to-b from-black to-gray-500 transform transition-ease-in-out hover:scale-110 duration-300">
              BEHANCE
            </p>
          </a>
          <a href="https://www.figma.com/@mhm_ari" target="_blank">
            <p className="text-xl font-bold mb-10 p-5 rounded-full border-2 border-gray-500 hover:border-white hover:bg-gradient-to-b from-black to-gray-500 transform transition-ease-in-out hover:scale-110 duration-300">
              FIGMA
            </p>
          </a>
        </div>
        <div className="headingTextSocialMedia">
          <h1 className="text-9xl font-bold">LET'S FIND OUT!</h1>
        </div>
      </div>
    </>
  );
}
