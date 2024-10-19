import MyButton from "./viewButton/page";
import Navbar from "./navbar/page";
import Link from "next/link";
import About from "./about/page";

export default function Home() {
  return (
   <>
    {/* Sir m ny code khud likha tha lekin wo responsive nhi ho rha tha to main ny chatGPT ki help sy responsive kia hy Bass.. */}
   <title>Multi-Page Web</title>
   <Navbar />
   <MyButton />
   </>
  );
};

