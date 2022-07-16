export default function HomeHeader({text, players}) {
  return (
    <div
      className="h-full"
      style={{
        background:
          "url(https://wallpaperaccess.com/full/2541026.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-bgray-bg bg-opacity-60">
        <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
          <div className="my-auto flex justify-center w-full">
            <div>
              <div className="container flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                  <div className="flex justify-center">
                    <img alt="Lynix PFP" className="h-32 rounded-full" src="/profile.jpg" />
                  </div>
                  <p className="mt-5 sm:mt-5 lg:w-10/12 text-gray-300 font-semibold text-center text-md sm:text-lg">
                    👋 Hey I'm Lynix! A ethical hacker and student at CCNB, welcome to my personal website!
                  </p>
                  <div className="flex justify-center my-2 mt-3">
                    <a href="/login" className="bg-blue-700 text-white flex flex-row items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left rounded-full md:w-auto md:inline md:mt-0 md:ml-4">
                      <span>
                        <i className="fas fa-comment mr-1"></i> Contact Me
                      </span>
                    </a>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}