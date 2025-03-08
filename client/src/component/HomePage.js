export default function HomePage() {
    return (
      <div id="home" className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Your One-Stop Solution for Manpower, Recruitment, and Business Growth
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            At <span className="font-semibold">VRS Manpower Solutions</span>, we provide end-to-end staffing, training, and consulting services to help businesses, colleges, hospitals, and manufacturing units thrive.
          </p>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl max-w-4xl w-full">
          <p className="text-lg text-center font-medium mb-4">
            Finding the right talent or the right opportunity can be challenging. That’s where we step in!
          </p>
          <p className="text-center text-gray-700 mb-6">
            We are a trusted partner for businesses, educational institutions, and healthcare organizations, offering comprehensive manpower solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-r from-indigo-400 to-blue-600 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Recruitment</h3>
              <p className="text-sm opacity-90">IT & Non-IT, bulk hiring, and specialized staffing.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-400 to-teal-600 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Training</h3>
              <p className="text-sm opacity-90">IT training, skill development, and HR internships.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-400 to-red-600 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Consulting</h3>
              <p className="text-sm opacity-90">Marketing, business strategy, and payroll management.</p>
            </div>
          </div>
          <p className="text-center text-gray-800 mt-6 font-medium">
            With a focus on quality, efficiency, and trust, we help you achieve your goals.
          </p>
          <div className="flex justify-center mt-6">
          <a href="#stareted">

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all">
              Get Started Today
            </button>
          </a>
          </div>
        </div>
      </div>
    );
  }
  