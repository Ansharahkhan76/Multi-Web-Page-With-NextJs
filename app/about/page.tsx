import Link from "next/link";
import Navbar from "../navbar/page";


function About() {
  return (
      <>
      <title>Multi-Page Web</title>
          <Navbar />
          <div className="items-center text-center justify-center rounded-sm sm:h-screen h-screen">
              <h1 className="relative text-4xl pt-8 mb-6">
                  About!
                  <span className="absolute left-0 right-0 mx-auto border-b-2 border-black" style={{ width: '40px', bottom: '-5px' }}></span>
              </h1>
              <div />
              <div className="flex flex-col pt-12 px-4 sm:px-24 pb-12">
                  <div className="border-l-2 border-pink-300 pl-4 pr-4 flex flex-col justify-center">
                      <p className="text-left">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus quasi nam, quod commodi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit odit vitae expedita nulla aliquid, ex a quidem nam accusamus incidunt recusandae aperiam vero harum consectetur reiciendis! Mollitia, ex doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam officiis numquam unde? Fugiat inventore sit ut, nam vero nulla dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum quibusdam tempora blanditiis sunt porro? esse. A quod eligendi laudantium fuga numquam? Similique ratione optio, cum iure ut atque. Explicabo corrupti culpa ipsa dolorum vitae perspiciatis distinctio iusto, dolores debitis provident eius, exercitationem fugiat natus error, odit earum officia nesciunt excepturi.
                      </p>
                  </div>
              </div>
              <div className="flex flex-col pt-12 px-4 sm:px-24 pb-12">
                  <div className="border-l-2 border-pink-300 pl-4 pr-4 flex flex-col justify-center">
                      <p className="text-left">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus quasi nam, quod commodi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum reprehenderit odit vitae expedita nulla aliquid, ex a quidem nam accusamus incidunt recusandae aperiam vero harum consectetur reiciendis! Mollitia, ex doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam officiis numquam unde? Fugiat inventore sit ut, nam vero nulla dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum quibusdam tempora blanditiis sunt porro? esse. A quod eligendi laudantium fuga numquam? Similique ratione optio, cum iure ut atque. Explicabo corrupti culpa ipsa dolorum vitae perspiciatis distinctio iusto, dolores debitis provident eius, exercitationem fugiat natus error, odit earum officia nesciunt excepturi.
                      </p>
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
          <div />
      </>
  )
}

export default About;
