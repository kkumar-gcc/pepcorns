function Navbar(props) {
  return (
    <>
      <div className="sticky top-0 z-10 w-full h-20 p-4 flex items-center bg-white shadow-sm border-b border-b-gray-200">
        <div className="w-full lg:px-8 flex flex-row items-center">
          <div><h5 className="text-2xl text-gray-700 font-semibold capitalize">{props.page}</h5></div>
          <div className="flex-1 flex flex-row justify-end items-center">
            <a
              href="#!"
              className="shadow-sm font-semibold text-base leading-6 border border-gray-200  flex-row rounded-lg py-2 px-4 inline-flex justify-center  hover:bg-gray-50"
            >
              login
            </a>
            <a
              href="#!"
              className="shadow-sm ml-2 font-semibold text-base leading-6   flex-row rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500 text-white"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
