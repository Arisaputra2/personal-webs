export default function Navbar() {
  return (
    <>
      <div className="navbar border-b-1 shadow-2xl shadow-gray-100 bg-white h-fit border-gray-200 w-full box-border flex p-6 justify-evenly text-black">
        <div
          id="logo"
          className="flex box-border items-center justify-start w-1/2"
        >
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
        <div
          id="menu-list"
          className="flex box-border items-center w-full justify-end"
        >
          <ul className="flex w-full p-1 justify-evenly items-center">
            <li className="ml-10">
              <a
                href=""
                className="inline-block text-center w-[100px] font-medium text-sm transform transition-all border-2 border-transparent hover:font-bold"
              >
                [ HOME ]
              </a>
            </li>
            <li className="ml-10">
              <a
                href=""
                className="inline-block text-center w-[100px] font-medium text-sm transform transition-all border-2 border-transparent hover:font-bold"
              >
                [ ABOUT ]
              </a>
            </li>
            <li className="ml-10">
              <a
                href=""
                className="inline-block text-center w-[100px] font-medium text-sm transform transition-all border-2 border-transparent hover:font-bold"
              >
                [ PROJECT ]
              </a>
            </li>
            <li className="ml-10">
              <a
                href=""
                className="inline-block text-center w-[150px] font-medium text-sm transform transition-all border-2 border-transparent hover:font-bold"
              >
                [ SOCIAL MEDIA ]
              </a>
            </li>
          </ul>
          <ul className="flex justify-center items-center w-1/2">
            <li className="flex flex-col">
              <a href="">CONTACT ME</a>
              <div className="border border-black w-full"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
