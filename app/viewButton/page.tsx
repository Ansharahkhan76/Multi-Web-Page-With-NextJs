import Link from "next/link";


function MyButton() {
  return (
      <>
      <title>Multi-Page Web</title>
          <div className="items-center text-center justify-center rounded-sm sm:h-screen h-screen">
              <div>
                  <h1 className="text-5xl font-bold pt-16">WELCOME</h1>
                  <p className="relative text-lg mb-6">
                      TO Our WEBSITE
                      <span className="absolute left-0 right-0 mx-auto border-b-2 border-black" style={{ width: '15px', bottom: '-5px' }}></span>
                  </p>
                  <p className="relative pt-7 text-lg px-4 sm:px-28 mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam veniam nam odio totam ab nesciunt. Unde totam odit eum ducimus nostrum est adipisci accusamus voluptatibus fugiat voluptatum et dolores, ullam, distinctio illum voluptatem ab tempora quos expedita impedit a ratione officiis consequuntur! Beatae magnam libero, fugit harum dolore accusantium!
                  </p>
              </div>
              <div className="container">
                  <button className="align-center justify-center px-6   text-lg border-2 border-black rounded hover:bg-gray-200">
                      Join Us Now!
                  </button> <br />
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
          </div>
      </>
  )
}

export default MyButton;
