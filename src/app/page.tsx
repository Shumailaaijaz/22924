import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/shared/Wrapper";
import HeroPoster from "./components/public/heroimage.png"

export default function Home() {
  return (
    <section className="bg-blue-700 flex heigh 100%">
    
      <Wrapper>
       <Header/>
        <div className="content flex ">
            <div className="content">
               <h4 className="text-pink-900 font-semibold text-lg ml-5">Governer Initiative for Artificial Intelligence and computing(GIAIC)</h4>
               <h1 className="text-4xl font-bold text-white ml-5"> I'am <br />Certified Web 3.0, Metaverse, and Artificial Intelligence(AI), Developer </h1>
               <p className="mt-6 text-pink-900 font-medium text-justify ml-5">GIAIC is a government initiative aimed at promoting the development and widespread adoption of artificial intelligence and computing in public services, education, healthcare, and industry. It is aimed at improving efficiency, reducing costs, and enhancing the quality of life for citizens and businesses.

               </p>
               <br />
               <button>Learn More</button>

            </div>
             <div className=" HeroPoster flex-1 image h-[500px] w-[100px] py-5 px-10 items-center justify-center ml-40">
                <Image src={HeroPoster} alt="Next.js" width={400} height={300}/>
              </div>
        </div>
        <br /><br />
      <Footer/>
      </Wrapper>
    
    </section>
    
);
}