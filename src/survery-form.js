
import coverBG from './images/cover-bg.jpg'

function SurveryForm() {
    return (
        <section className="cover bg-white-100 text-white-600 body-font relative cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-4 lg:px-8 xl:px-40 2xl:px-30 overflow-hidden py-20 flex
        items-center min-h-screen">
            <div className="h-full absolute top-0 left-0 z-0" style={{backgroundColor: "green"}}>
                <img  alt="" className="w-full h-full object-cover opacity-20" />
            </div>
            
            <div style={{ marginLeft: "100px" }}>
                <div className="flex flex-col text-center w-full mb-12 " >
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Survey</h1>
                </div>
                <br/>
                <div className="flex flex-col  w-full mb-12">
                    <p style={{ marginBottom: "15px" }} className="text-xl  text-white"><li>In general, would you say your health is:</li></p>
                    
                    <div className="flex items-center mb-4">
                
                    <input id="country-option-1" type="radio" name="countries" value="Yes" style={{ marginLeft: "20px" }} class="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                <label for="country-option-1" class="text-md text-white ">
                Excellent
                        </label>
                        <input type="radio" name="countries" value="No" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md text-white">
                            Good
                        </label>
                        <input type="radio" name="countries" value="Maybe" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md  text-white">
                            Fair
                        </label>
                    </div>
                        <br/>
                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl  text-white"><li>Compared to one year ago, how would to rate your health in general now?</li></p>
                    <div className="flex items-center mb-4">
                        <input type="radio" name="countries1" value="Yes" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md   text-white">
                            Much better than one year ago.
                        </label>
                        <input type="radio" name="countries1" value="No" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md text-white">
                            About the same
                        </label>
                        <input type="radio" name="countries1" value="Maybe" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md text-white">
                            Somewhat worse now than one year ago
                        </label>
                    </div>
                    <br/>
                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl  text-white"><li>Does your health now limit you in vigorous activities? </li></p>
                    <div className="flex items-center mb-4">
                        <input type="radio" name="countries2" value="Yes" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md  text-white">
                            Yes, limited a lot
                        </label>
                        <input type="radio" name="countries2" value="No" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md  text-white">
                            limited a little
                        </label>
                        <input type="radio" name="countries2" value="Maybe" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md  text-white">
                            Maybe
                        </label>
                    </div>
                    <br/>
                    <p style={{ marginBottom: "15px", marginTop: "10px" }} className="text-xl  text-white"><li>How much did pain interfere with your normal work?</li></p>
                    <div className="flex items-center mb-4 ">
                        <input type="radio" name="countries4" value="Yes" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-50  focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md text-white">
                            Not at all
                        </label> 
                        
                        <input type="radio" name="countries4" value="No" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md  text-white">
                            Moderately
                        </label>
                        <input type="radio" name="countries4" value="Maybe" style={{ marginLeft: "20px" }} className="h-3 w-3 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                        <label htmlFor="country-option-1" className="text-md text-white">
                            Quite a bit
                        </label>
                    </div> 
                   <br/>
                    <div className="p-2 w-full text-center">
                        <a className="inline-block  font-semibold px-4 py-2 text-white bg-blue-600 md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            href="#thankYou" >Submit</a>
                    </div>
                    <div style={{ marginLeft: "50%" }} className="inline-block font-semibold px-4 py-2 text-white  md:bg-transparent md:text-white  rounded">
                        
                    </div>
                </div>
            </div>
           
        </section>
    )
}
export default SurveryForm