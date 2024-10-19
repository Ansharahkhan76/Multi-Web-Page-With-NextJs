import Link from "next/link";
import Navbar from "../navbar/page";

function Contact(){
    return(
        <>
        <title>Multi-Page Web</title>
            <Navbar />
            {/* Sir m ny code khud likha tha lekin wo responsive nhi ho rha tha to main ny chatGPT ki help sy responsive kia hy.. */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-center mb-6">
                    We're here to help! Fill out the form below or reach out through our social media channels.
                </p>

                <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-8 sm:space-y-0 sm:space-x-4">
                    {/* Contact Form */}
                    <div className="bg-gradient-to-r from-[#ffecd2] to-[#aae6eb]rounded-lg shadow-lg p-6 flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                                <textarea id="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-200" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gradient-to-r from-[#ffecd2] to-[#aae6eb] rounded-lg shadow-lg p-6 flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
                        <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p className="mb-2"><strong>Email:</strong> info@example.com</p>
                        <h3 className="text-xl font-semibold mt-4">Follow Us</h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                        </div>
                    </div>
                </div>
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
            </div>
        </>

    )
}

export default Contact;