export default function MainContent() {
  return (
    <>
      <div
        id="main"
        className="flex flex-col w-full p-2 justify-center border-2 border-black box-border mt-5 h-auto"
      >
        <div className="header-text w-full border-2 border-black justify-center p-2 mr-5">
          <h1 className="text-6xl text-center tracking-wider">
            LOOKING FOR UI/UX DESIGNER?
          </h1>
        </div>
        <div className="baseInIndonesia">
          <p className="text-end tracking-[.75rem]">BASE IN INDONESIA</p>
        </div>
        <div className="picture w-full flex justify-center items-center mb-5 mt-5">
          <img
            src="img/MyProfile.jpg"
            alt=""
            className="w-100 h-100 grayscale-100 object-cover items-center justify-center relative"
          />
          <p className="absolute text-7xl text-white font-bold">WANTED</p>
        </div>
        <div className="quoteMe mb-5">
          <p className="text-center tracking-[.25rem]">
            UI/UX DESIGN ENTHUSIASM AND WEB DEVELOPMENT
          </p>
        </div>
      </div>
    </>
  );
}
