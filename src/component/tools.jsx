export default function Tools() {
  return (
    <>
      <div className="tools-section w-full flex flex-col box-border p-5 justify-center items-center border-2 border-black mt-5 h-auto">
        <div className="headingTools">
          <h1 className="text-3xl font-bold mb-10">TOOLS</h1>
        </div>
        <div className="tools flex flex-row justify-center items-center w-full gap-10">
          <div className="figma w-1/5 flex flex-col justify-center items-center">
            <img src="img/Figma.png" alt="Figma Logo" className="w-10 h-10" />
            <h1 className="text-sm font-light mt-2">Figma</h1>
          </div>
          <div className="adobeXD w-1/5 flex flex-col justify-center items-center">
            <img
              src="img/Illustator.png"
              alt="Adobe XD Logo"
              className="w-10 h-10"
            />
            <h1 className="text-sm font-light mt-2">Adobe XD</h1>
          </div>
          <div className="photoshop w-1/5 flex flex-col justify-center items-center">
            <img
              src="img/Photoshop.png"
              alt="Photoshop Logo"
              className="w-10 h-10"
            />
            <h1 className="text-sm font-light mt-2">Photoshop</h1>
          </div>
          <div className="illustrator w-1/5 flex flex-col justify-center items-center">
            <img
              src="img/VScode.png"
              alt="Illustrator Logo"
              className="w-10 h-10"
            />
            <h1 className="text-sm font-light mt-2">Illustrator</h1>
          </div>
        </div>
      </div>
    </>
  );
}
