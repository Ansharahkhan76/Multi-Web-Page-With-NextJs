import Link from "next/link";
import Navbar from "../navbar/page";

function Services() {
    return (
        <>
        <title>Multi-Page Web</title>
            <Navbar />
            <div className="items-center text-center justify-center rounded-sm sm:h-screen h-screen">
                <h1 className="relative text-4xl pt-8 mb-6">
                    Our Services!
                    <span className="absolute left-0 right-0 mx-auto border-b-2 border-black" style={{ width: '95px', bottom: '-5px' }}></span>
                </h1>
                <div /> <br />
                <div className="min-h-screen">
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Box-1 */}
                        <div className="w-full sm:w-60 h-60 border-2 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                                <p>Creating visually appealing and user-friendly interfaces that enhance user experiences and promote brand engagement across all platforms.</p>
                            </div>
                        </div>
                        {/* Box-2 */}
                        <div className="w-full sm:w-96 h-60 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-2 border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                                <p>Building responsive, high-performance websites using modern technologies like HTML, CSS, and JavaScript. From simple landing pages to complex web applications, we ensure your site is optimized for both performance and user experience, adaptable to any device and built for scalability.</p>
                            </div>
                        </div>
                        {/* Box-3 */}
                        <div className="w-full sm:w-60 h-60 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-2 border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">E-Commerce Solutions</h3>
                                <p>Developing secure online stores that enhance customer experiences and drive sales through effective user engagement strategies.</p>
                            </div>
                        </div>
                    </div><br />
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Box-4 */}
                        <div className="w-full sm:w-60 h-60 border-2 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                                <p>Enhancing website visibility and search rankings through effective SEO strategies that increase organic traffic and improve user engagement.</p>
                            </div>
                        </div>
                        {/* Box-5 */}
                        <div className="w-full sm:w-60 h-60 border-2 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                                <p>Improving website speed and reliability to ensure seamless user experiences across all devices and platforms.</p>
                            </div>
                        </div>
                        {/* Box-6 */}
                        <div className="w-full sm:w-60 h-60 bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] border-2 border-black">
                            <div className="p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
                                <p>Providing ongoing website maintenance and reliable support to ensure optimal performance and security.</p>
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            </div>
            <br />
                  <footer className="bg-transparent font-semibold text-black"> <br />
            <div className="container  pb-6 px-7 mx-auto"> <br />
                <div className="flex flex-col sm:flex-row justify-between  border-spacing-3 border-2 border-black items-center">
                    <div className="mb-2 sm:mb-0">
                        <p className=" pt-6 pb-6 px-7">&copy; {new Date().getFullYear()} Multi-page web application built with Next.js.</p>
                    </div>
                    <div className="flex pr-4 space-x-4">
                        <Link href="/about" className="text-sm hover:text-blue-400">About</Link>
                        <Link href="/services" className="text-sm hover:text-blue-400">Terms of Service</Link>
                        <Link href="/contact" className="text-sm hover:text-blue-400">Contact</Link>
                    </div>
                </div>
                <div className=" text-sm text-center justify-center align-center"><p className=" text-center"> ☺ Ansharah. All rights reserved</p></div>
            </div>
        </footer>
        </>
    )
}

export default Services;
