import home from './images/home.png'
import coverBG from './images/cover-bg.jpg'

function SurveryForm() {
    return (
        <section className="cover bg-white-100 text-white-600 body-font relative cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-4 lg:px-8 xl:px-40 2xl:px-30 overflow-hidden py-20 flex
        items-center min-h-screen">
            <div className="h-full absolute top-0 left-0 z-0">
                <img src={coverBG} alt="" className="w-full h-full object-cover opacity-20" />
            </div>
            <div style={{ marginLeft: "100px" }}>
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Survey</h1>
                </div>
                <div className="flex flex-col  w-full mb-12">
                    <p style={{ marginBottom: "15px" }} className="text-xl font-bold text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    <div className="flex items-center mb-4">
                    <input id="country-option-1" type="radio" name="countries" value="Yes" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                Yes
                        </label>
                        <input type="radio" name="countries" value="No" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            No
                        </label>
                        <input type="radio" name="countries" value="Maybe" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Maybe
                        </label>
                    </div>

                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl font-bold text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    <div className="flex items-center mb-4">
                        <input type="radio" name="countries1" value="Yes" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Yes
                        </label>
                        <input type="radio" name="countries1" value="No" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            No
                        </label>
                        <input type="radio" name="countries1" value="Maybe" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Maybe
                        </label>
                    </div>
                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl font-bold text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    <div className="flex items-center mb-4">
                        <input type="radio" name="countries2" value="Yes" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Yes
                        </label>
                        <input type="radio" name="countries2" value="No" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            No
                        </label>
                        <input type="radio" name="countries2" value="Maybe" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Maybe
                        </label>
                    </div>
                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl font-bold text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    <div className="flex items-center mb-4">
                        <input type="radio" name="countries4" value="Yes" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Yes
                        </label>
                        <input type="radio" name="countries4" value="No" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            No
                        </label>
                        <input type="radio" name="countries4" value="Maybe" style={{ marginLeft: "10px" }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Maybe
                        </label>
                    </div>
                    <div className="p-2 w-full">
                        <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            href="#thankYou" style={{ margiLeft: "280px" }}>Submit</a>
                    </div>
                    <div style={{ marginLeft: "90%" }} className="inline-block font-semibold px-4 py-2 text-white  md:bg-transparent md:text-white  rounded">
                        <a href="#"><img src={home} alt="" style={{ width: "30px", height: "30px" }} /></a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default SurveryForm