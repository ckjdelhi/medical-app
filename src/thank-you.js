import home from './images/home.png'
import coverBG from './images/cover-bg.jpg'

function ThankYou() {
    return (
        <section className="cover bg-white-100 text-white-600 body-font relative cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-4 lg:px-8 xl:px-40 2xl:px-30 overflow-hidden py-20 flex
        items-center min-h-screen">
            <div className="h-full absolute top-0 left-0 z-0" style={{backgroundColor: "green"}}>
                <img  alt="" className="w-full h-full object-cover opacity-20" />
            </div>
            <div style={{ margin: "200px" }}>
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Thank you for the information.</h1>
                </div>
                <div className="flex flex-col text-center  w-full mb-12" style={{ margin: "0 auto" }}>
                    <div className="p-2 w-full">
                        <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:text-white border border-white rounded focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            href="#">Home</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ThankYou