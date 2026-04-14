import { HiHeart } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white border-t py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center  ">
        <div className="flex items-center justify-center gap-3 mb-4 ">
          <h3 className="text-6xl font-bold text-white">KeenKeeper</h3>
        </div>

        <div className="mt-8">
          <p className="text-gray-400">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="mt-10 ">
          <p className="text-3xl font-xl">Social Links</p>

          <div className="text-center flex justify-center gap-6 mt-6">
            <div className=" h-12 w-12 rounded-full bg-white flex justify-center items-center">
              <FaFacebookSquare className="text-black h-6 w-6" />
            </div>
            <div className=" h-12 w-12 rounded-full bg-white flex justify-center items-center">
              <FaInstagramSquare className="text-black h-6 w-6" />
            </div>
            <div className=" h-12 w-12 rounded-full bg-white flex justify-center items-center">
              <FaXTwitter className="text-black h-6 w-6" />
            </div>
          </div>
        </div>


      </div>
              <hr className=" text-gray-400 mt-8 mb-8 w-full" />

        <div>
          <p className="text-xs text-gray-400 mt-6 flex items-center justify-center">
            © 2026 KeenKeeper • Made with
            <HiHeart className="text-red-700 h-8 w-8 " /> for keeping
            relationships strong
          </p>
        </div>
    </footer>
  );
};

export default Footer;
