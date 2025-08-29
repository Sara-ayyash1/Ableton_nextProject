
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-300 mt-16">

       <div className="max-w-7xl mx-auto  px-6 py-5">
              <img 
            src="/ableton-wordmark.c025e3df71b3.svg" 
            alt="Ableton Logo" 
            className="h-12 mb-4" 
          />
       </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Section 1 */}
        <div>   
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Register Live, Push or Move</a></li>
            <li><a href="#" className="hover:underline">About Ableton</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
          </ul>
         <div className="flex items-center space-x-4 mt-4 text-2xl">
        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="text-sky-400 hover:text-sky-600"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="text-red-600 hover:text-red-800"><i className="fa-brands fa-youtube"></i></a>
        <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" className="text-black hover:text-gray-800"><i className="fa-brands fa-tiktok"></i></a>
        <a href="#" className="text-indigo-500 hover:text-indigo-700"><i className="fa-brands fa-discord"></i></a>
      </div>


            <div>
          <h3 className="font-semibold mb-4 pt-14">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Find Ableton User Groups</a></li>
            <li><a href="#" className="hover:underline">Find Certified Training</a></li>
            <li><a href="#" className="hover:underline">Become a Certified Trainer</a></li>
          </ul>
        </div>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-semibold mb-4">Education</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Offers for students and teachers</a></li>
            <li><a href="#" className="hover:underline">Ableton for the Classroom</a></li>
            <li><a href="#" className="hover:underline">Ableton for Colleges and Universities</a></li>
          </ul>
         <div>
          <h3 className="font-semibold mb-4 pt-14">Language and Location</h3>
            <div className="flex gap-5">
              <select>
              <option >English</option>
              <option>Arabic</option>
            </select>

            <div className="text-grey-300">
               <select >
              <option>Palestinian Territory, Occ</option>
            </select>
            </div>
            </div>
        </div>
        </div>
      

        {/* Section 3 - Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Sign up to our newsletter</h3>
          <p className="text-gray-600 mb-4">
            Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-[60%] px-3 py-2 border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 font-semibold"
            >
              Sign up
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pt-5  pb-16 flex flex-col md:flex-row justify-between items-center text-xs  ">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
          <a href="#">Contact Us</a>
          <a href="#">Press Resources</a>
          <a href="#">Legal Info</a>
          <a href="#">Corporate Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Imprint</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Made in Berlin</span>
          <span className="font-bold">▮▯▯▯</span>
        </div>
      </div>
    </footer>
  );
}
