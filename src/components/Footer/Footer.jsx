const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl">
            👥
          </div>
          <h3 className="text-xl font-bold text-gray-800">KeenKeeper</h3>
        </div>
        <p className="text-gray-500">Never lose touch with the people who matter most</p>
        <p className="text-xs text-gray-400 mt-6">
          © 2026 KeenKeeper • Made with ❤️ for keeping relationships strong
        </p>
      </div>
    </footer>
  );
};

export default Footer;