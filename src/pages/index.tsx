import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Whatsapp from "@/components/Whatsapp";
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: any, e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>India TripGuide</title>
      </Head>
      <>
        {/* Component Code */}
        <div
          className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(hero.jpg)",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
          <main className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-green-300 via-white to-orange-300 font-bold">
                  India
                </span>{" "}
                TripGuide
              </h2>
              <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                Embark on a journey through cultural, historical, and vibrant
                destinations.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center gap-2 justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-[#24D366] hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                  >
                    <div className="w-[20] h-[20]">
                      <Whatsapp />
                    </div>
                    Book Tours
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Container for demo purpose */}
        <div id="varanasi" className="w-full">
          {/* Section: Design Block */}
          <section className="background-radial-gradient text-center lg:text-left">
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/varanasi.jpg')] h-[500px]">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.55)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                    <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                      Varanasi
                    </h2>
                    <p className="text-lg">
                      Book your Varanasi adventure with us for an unforgettable
                      experience, immersing in rich culture, spirituality, and
                      timeless charm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="bodhgaya" className="w-full">
          {/* Section: Design Block */}
          <section className="background-radial-gradient text-center lg:text-left">
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/bodhgaya.jpg')] h-[500px]">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.55)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                    <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                      Bodh Gaya
                    </h2>
                    <p className="text-lg">
                      Plan your Bodh Gaya tour today and immerse in
                      enlightenment, tranquility, and sacred sites for a
                      transformative and enriching experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="kolkata" className="w-full">
          {/* Section: Design Block */}
          <section className="background-radial-gradient text-center lg:text-left">
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/kolkata.jpg')] h-[500px]">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.55)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                    <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                      Kolkata
                    </h2>
                    <p className="text-lg">
                      Reserve your Kolkata tour now for a captivating journey
                      through cultural diversity, historical marvels, and
                      vibrant city life. Book today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
