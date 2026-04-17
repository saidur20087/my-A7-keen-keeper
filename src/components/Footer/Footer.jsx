import { HiHeart } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white border-t py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center  ">
        <div className="flex items-center justify-center gap-3 ">
          <h3 className="text-5xl font-bold text-white">KeenKeeper</h3>
        </div>

        <div className="mt-4">
          <p className="text-gray-400">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="mt-4 ">
          <p className="text-2xl font-xl">Social Links</p>

          <div className="text-center flex justify-center gap-6 mt-4">
            <div className=" h-8 w-8 rounded-full bg-white flex justify-center items-center">
              <FaFacebookSquare className="text-black h-4 w-4" />
            </div>
            <div className=" h-8 w-8 rounded-full bg-white flex justify-center items-center">
              <FaInstagramSquare className="text-black h-4 w-4" />
            </div>
            <div className=" h-8 w-8 rounded-full bg-white flex justify-center items-center">
              <FaXTwitter className="text-black h-4 w-4" />
            </div>
          </div>
        </div>


      </div>
              <hr className=" text-gray-600 mt-4 mb-4 w-full" />

        <div>
          <p className="text-xs text-gray-400  flex items-center justify-center">
            © 2026 KeenKeeper • Made with
            <HiHeart className="text-red-700 h-6 w-6 " /> for keeping
            relationships strong
          </p>
        </div>
    </footer>
  );
};

export default Footer;
