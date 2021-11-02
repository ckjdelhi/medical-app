import home from './images/home.png'
import coverBG from './images/cover-bg.jpg'
function PatientForm() {
    return (
      <section className="cover bg-white-100 text-white-600 body-font relative cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-4 lg:px-8 xl:px-40 2xl:px-30 overflow-hidden py-20 flex
      items-center min-h-screen">
        <div className="h-full absolute top-0 left-0 z-0">
          <img src={coverBG} alt="" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Patient Registration Form</h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">The Patient can opt-in htmlFor provider service.</p>
          </div>
          <div className=" mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="message" className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Date Of Birth</label>
                  <input type="date" id="message" name="message" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
              </div>
              <div className="p-2 w-full">
                 <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  href="#survey" style={{margiLeft: "280px"}}>Submit</a>
              </div>
              <div style={{marginLeft: "90%"}} className="inline-block font-semibold px-4 py-2 text-white  md:bg-transparent md:text-white  rounded">
                <a href="#"><img src={home} alt="" style={{width:"30px", height:"30px"}}/></a>
            </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-blue text-center">
                <a className="leading-normal my-5">healthPro@email.com</a>
                <p className="leading-normal my-5">49 Smith St.
                  <br />Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-white-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-white-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-white-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-white-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  export default PatientForm