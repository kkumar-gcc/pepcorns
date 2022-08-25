import { useState } from "react";
import Modal from "../components/modal";
import Navbar from "../components/navbar";

function CompanyDetail() {
  const [tabState, setTabState] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const toggleTab = (index) => {
    setTabState(index);
  };
  return (
    <>
      <Navbar page="dashboard" />
      <Modal onClose={() => setShowModal(false)} showModal={showModal} />
      <div className="w-full px-2 mt-2 text-gray-700 sm:px-6 sm:mt-6 md:px-20 md:mt-16 ">
        <div className="border border-gray-200 hover:border-gray-400 mt-12 w-full  px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
          <div className="flex flex-col-reverse items-stretch justify-center p-4 sm:p-6 sm:flex-row">
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="">
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://api.pepcorns.com/clientassets/icon1651230435196.png"
                  alt="Letzrent's logo"
                />
              </div>
              <div className="flex-1 md:pl-4 mt-3 md:mt-0">
                <a href="/">
                  <h5 className="mb-2 text-2xl font-bold line-clamp-3  tracking-wide text-gray-900">
                    Letzrent
                  </h5>
                </a>
                <div className="flex flex-col lg:flex-row ">
                  <div className="flex-1 prose max-w-none">
                    <p>
                      Online search, compare & booking platform for self-drive
                      cars, charter flights, living space & more that rewards
                      users
                    </p>
                    <ul>
                      <li>EMAIL : example@email.com</li>
                      <li>
                        Website :{" "}
                        <a href="https://letzrent.com">https://letzrent.com</a>
                      </li>
                      <li>PAN/TAN : AAJCR3294F</li>
                    </ul>
                    <div className="mt-1">
                      <span className="inline-flex py-1 px-2 mb-2 mx-[5px] first:ml-0 text-[10px] leading-4  font-bold tracking-wide border rounded-[4px] shadow-sm border-blue-200 uppercase  bg-blue-100 text-blue-600">
                        GEN Z FOUNDER
                      </span>
                      <span className="inline-flex py-1 px-2 mb-2 mx-[5px] first:ml-0 text-[10px] leading-4  font-bold tracking-wide border rounded-[4px] shadow-sm border-blue-200 uppercase  bg-blue-100 text-blue-600">
                        MOBILITY
                      </span>
                      <span className="inline-flex py-1 px-2 mb-2 mx-[5px] first:ml-0 text-[10px] leading-4  font-bold tracking-wide border rounded-[4px] shadow-sm border-orange-200 uppercase  bg-orange-100 text-orange-600">
                        E-COMMERCE
                      </span>
                    </div>
                  </div>
                  <div className="lg:pl-3 mt-3 lg:mt-0  flex flex-row items-start">
                    <button className="shadow-sm mr-2 font-semibold text-base leading-6 border border-blue-500  flex-row rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500 text-white">
                      Follow
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="shadow-sm  mr-2 font-semibold text-base leading-6 border border-gray-200  flex-row rounded-lg py-2 px-4 inline-flex justify-center  hover:bg-gray-50"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-full mt-3 lg:flex-row ">
          <div className="flex-1 my-2 basis-2/3 lg:w-2/3">
            <div
              className={
                "prose p-0 max-w-none lg:max-w-full xl:max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-600  prose-a:no-underline border border-gray-200  mt-12 w-full   text-base text-left rounded-b-lg  font-normal shadow-sm"
              }
            >
              <div>
                <iframe
                  className="w-full min-h-[250px] sm:min-h-[300px] lg:min-h-[390px]"
                  video-url="currentVdo"
                  player="bestPlayer"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="LetzRent for Pepcorns | Making renting simple, affordable and rewarding."
                  src="https://www.youtube.com/embed/biGcDeB2PbQ?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=2"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="p-4 sm:p-8">
                <div className="flex flex-row flex-wrap justify-center items-center">
                  <div className="flex-1 flex flex-row justify-center  last:mr-0 mr-2 mb-2">
                    Mumbai,Maharashtra
                  </div>
                  <div className="flex-1 flex flex-row justify-center last:mr-0 mb-2 mr-2">
                    <a href="https://letzrent.com">https://letzrent.com</a>
                  </div>
                  <div className="flex-1 flex flex-row justify-center not-prose last:mr-0 mb-2 mr-2">
                    <a
                      href="https://twitter.com/manishpratik"
                      className="p-2 last:mr-0 mr-2 rounded-full shadow-sm  text-white bg-[#bc2a8d]"
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                      </svg>
                      <span className="sr-only">Instagram share</span>
                    </a>
                    <a
                      href="#!"
                      className="p-2 last:mr-0 mr-2  rounded-full shadow-sm  text-white bg-[#4267B2]"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a
                      href="https://twitter.com/manishpratik"
                      className="p-2 last:mr-0 mr-2 rounded-full shadow-sm  text-white bg-[#FF0000]"
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                      </svg>
                      <span className="sr-only">Youtube Share</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs mb-4  mt-4 dark:border-gray-700 overflow-y-hidden">
              <ul
                className="flex flex-nowrap  whitespace-nowrap  -mb-px text-sm font-medium text-center -primary "
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className={
                      "inline-flex p-4 rounded-t-lg border-b-4 " +
                      (tabState === 1
                        ? "text-blue-600   border-blue-600"
                        : "hover:text-gray-600 hover:border-gray-300   text-gray-500  border-gray-100")
                    }
                    onClick={() => toggleTab(1)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
                      <path d="M12 17v1m0 -8v1"></path>
                    </svg>
                    Pitch
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className={
                      "inline-flex p-4 rounded-t-lg border-b-4 " +
                      (tabState === 2
                        ? "text-blue-600   border-blue-600"
                        : "hover:text-gray-600 hover:border-gray-300 text-gray-500  border-gray-100")
                    }
                    onClick={() => toggleTab(2)}
                  >
                    <svg
                      className="w-5  h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
                      <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
                    </svg>
                    Details
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className={
                      "inline-flex p-4 rounded-t-lg border-b-4 " +
                      (tabState === 3
                        ? "text-blue-600   border-blue-600"
                        : "hover:text-gray-600 hover:border-gray-300   text-gray-500  border-gray-100")
                    }
                    onClick={() => toggleTab(3)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" x="0"></rect>
                      </g>
                      <g>
                        <g>
                          <g>
                            <path d="M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Updates
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className={
                      "inline-flex p-4 rounded-t-lg border-b-4 " +
                      (tabState === 4
                        ? "text-blue-600   border-blue-600"
                        : "hover:text-gray-600 hover:border-gray-300   text-gray-500  border-gray-100")
                    }
                    onClick={() => toggleTab(4)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
                    </svg>
                    Comments (0)
                  </button>
                </li>
              </ul>
            </div>
            <article
              className={
                (tabState === 1 ? "block" : "hidden") +
                " prose max-w-none lg:max-w-full xl:max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-600  prose-a:no-underline border border-gray-200  mt-12 w-full  px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm"
              }
            >
              <div className="p-4 sm:p-6 ">
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center ">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Deck
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="https://api.pepcorns.com/clientassets/icon1651230174497.pdf"
                        rel="noreferrer"
                        className="shadow-sm font-semibold text-base leading-6 border border-gray-200  flex-row rounded-lg py-2 px-4 inline-flex justify-center  hover:bg-gray-50"
                        target="_blank"
                      >
                        DOWNLOAD PITCH DECK
                      </a>
                    </div>
                  </header>
                  <div className="my-8">
                    <p>
                      10 Seconds Pitch Online search, compare & booking platform
                      for self-drive cars, charter flights, living space & more
                      that rewards users
                    </p>
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Deck Info
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <h5 className="text-2xl font-bold line-clamp-3  tracking-wide text-gray-900">
                      Letzrent
                    </h5>
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Highlights
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <ul>
                      <li>Running profitable pilot in&nbsp;Bengaluru.</li>{" "}
                      <li>
                        20k+ registered users, 4.2 app rating and 10k+ social
                        media following&nbsp;&nbsp;
                      </li>
                      <li>
                        Company is projecting 100cr+ transaction volume in 5
                        years
                      </li>
                      <li>
                        Founder with the marketing expertise of 17+ years in
                        Reliance, Naaptol, Tv9 and Zee and more.
                      </li>
                      <li>GenZ CTO and co-founder.</li>
                      <li>
                        Expansion is easy and the untapped customer base is
                        huge.
                      </li>
                      <li>Been in news articles, already making buzz.</li>
                    </ul>
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Traction
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="traction "
                      src="https://images.unlayer.com/projects/15608/1651352968445-10.PNG"
                    />
                  </div>
                </section>

                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Smarter Way To Rent
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section Smarter Way To Rent "
                      src="https://images.unlayer.com/projects/15608/1651352942115-6.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Customers Want Low Prices
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <p>
                      To get low prices 85% of the consumers check at least 2
                      data points (Source: BCG Consumer Trends). In various
                      sectors information centred buying has been made more
                      efficient by companies like MMT for Travel, Policy bazaar
                      for Insurance, Myntra or Shopperstop for Lifestyle
                      products. However for rental products, there is no one &
                      to fill this need and make the process efficient we
                      launched LetzRent, hoping to have a first-mover advantage
                      and dominate the market in the coming future.
                    </p>
                    <img
                      alt="section Customers Want Low Prices "
                      src="https://images.unlayer.com/projects/15608/1651352925215-3.PNG"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Single KYC
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <p>
                      Renting is a KYC dependent process, every time a customer
                      books a service from a different service provider he/she
                      will have to get a new KYC done. With Letzrent, the hassle
                      of multiple KYC gets removed and with a single KYC,
                      customers can rent from multiple brands.
                    </p>
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Vast Selection
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <p>
                      Being an aggregator Letzrent offers more options than
                      category leaders.
                    </p>
                    <img
                      alt="section Vast Selection "
                      src="https://images.unlayer.com/projects/15608/1651352918059-2.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Why Renting?
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <ol>
                      <li>
                        Demographic Twist: Commitment phobic millennials prefer
                        an asset lite life with a bias toward renting rather
                        than buying.
                      </li>{" "}
                      <li>
                        Flexibility: Renting allows people to upgrade or change
                        assets easily.
                      </li>
                      <li>
                        Convenience: With the rental customers dispense with the
                        headache of down payment, maintenance, insurance etc.
                      </li>
                    </ol>
                    <img
                      alt="section Why Renting?  "
                      src="https://images.unlayer.com/projects/15608/1651352954073-8.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Market Size
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section Market Size "
                      src="https://images.unlayer.com/projects/15608/1651352961142-9.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Competitors
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section  Competitors"
                      src="https://images.unlayer.com/projects/15608/1651352937596-5.PNG"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Feedback: People love us
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section Feedback: People love us"
                      src="https://images.unlayer.com/projects/15608/1651352929580-4.PNG"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Future and growth
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section Future and growth"
                      src=" https://images.unlayer.com/projects/15608/1651352907089-1.PNG"
                    />

                    <img
                      alt="section Future and growth"
                      src="https://images.unlayer.com/projects/15608/1651352949305-7.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Core Team
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <img
                      alt="section Core Team"
                      src="https://images.unlayer.com/projects/15608/1651352986615-11.png"
                    />
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Documents for Investors
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <ul>
                      <li>
                        <a href="http://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view">
                          Due Diligence Report
                        </a>
                      </li>
                      <li>
                        <a href="http://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view?usp=sharing">
                          Certificate of Incorporation
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </article>
            <article
              className={
                (tabState === 2 ? "block" : "hidden") +
                " prose max-w-none lg:max-w-full xl:max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-600  prose-a:no-underline border border-gray-200  mt-12 w-full  px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm"
              }
            >
              <div className="p-4 sm:p-6 ">
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center ">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Meet our strong and visionary team members
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <div className=" not-prose flex flex-col md:flex-row w-full">
                      <div className="p-4 sm:p-6 my-4  border flex-1 grow  border-gray-200 hover:shadow-sm first:ml-0 md:ml-4 rounded-lg flex flex-row ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src="https://api.pepcorns.com/clientassets/icon1651231237314.jpg"
                          alt="Manish Pratik"
                        />
                        <div className="flex-1 basis-1/2 pl-4">
                          <h5 className="text-lg md:text-2xl font-semibold ">
                            {" "}
                            Manish Pratik{" "}
                          </h5>
                          <p>CoFounder</p>
                          <div className="flex mt-2 space-x-6 sm:justify-center">
                            <a
                              href="#!"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#4267B2]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Facebook page</span>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/manishpratik/"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#0077B5]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"></path>
                              </svg>
                              <span className="sr-only">LindedIn page</span>
                            </a>
                            <a
                              href="https://twitter.com/manishpratik"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#1DA1F2]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                              <span className="sr-only">Twitter page</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 my-4  border flex-1 grow  border-gray-200 hover:shadow-sm first:ml-0 md:ml-4 rounded-lg flex flex-row ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src="https://api.pepcorns.com/clientassets/icon1651243119561.jpg"
                          alt="Gautam Menon"
                        />
                        <div className="flex-1 basis-1/2 pl-4">
                          <h5 className="text-lg md:text-2xl font-semibold ">
                            {" "}
                            Gautam Menon{" "}
                          </h5>
                          <p>CoFounder</p>
                          <div className="flex mt-2 space-x-6 sm:justify-center">
                            <a
                              href="#!"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#4267B2]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Facebook page</span>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/gautam-menon-040379208"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#0077B5]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"></path>
                              </svg>
                              <span className="sr-only">LindedIn page</span>
                            </a>
                            <a
                              href="#!"
                              className="p-2 rounded-full shadow-sm  text-white bg-[#1DA1F2]"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                              <span className="sr-only">Twitter page</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      How will we use funds : Sales & Marketing - 50% | Human
                      Resource-30% | Technology -10% | OPEX-10%
                    </p>
                  </div>
                </section>
                <section>
                  <div className="my-8">
                    <div className=" not-prose flex flex-col md:flex-row w-full">
                      <div className="p-4 sm:p-6 my-4 flex-1 grow  border  border-gray-200 hover:shadow-sm first:ml-0 md:ml-4 rounded-lg">
                        <div className=" flex flex-row mb-2">
                          <div className="flex-1">
                            <p className="uppercase text-sm">Start Date</p>
                            <h5 className="text-xl text-gray-700 font-medium">
                              2022-06-26 16:38:05
                            </h5>
                          </div>
                          <div className=" ml-4">
                            <div className="p-3 shadow-sm rounded-full bg-pink-600 text-white">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 12l-6.5 5.5"></path>
                                <path d="M12 3v9h9"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p>
                          <span className="text-green-600 inline-flex">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              ></path>
                            </svg>
                            Ends In
                            <span className="text-gray-600 ml-2">0 Days</span>
                          </span>
                        </p>
                      </div>
                      <div className="p-4 sm:p-6 my-4 flex-1 grow border  border-gray-200 hover:shadow-sm first:ml-0 md:ml-4 rounded-lg">
                        <div className="flex flex-row mb-2">
                          <div className="flex-1 ">
                            <p className="uppercase text-sm">Target Raise</p>
                            <h5 className="text-xl text-gray-700 font-medium">
                              5000000
                            </h5>
                          </div>
                          <div className="ml-4">
                            <div className="p-3 shadow-sm rounded-full bg-orange-600 text-white">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 12l-6.5 5.5"></path>
                                <path d="M12 3v9h9"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p>
                          <span className="text-green-600 inline-flex">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              ></path>
                            </svg>
                            0 %
                            <span className="text-gray-600 ml-2">
                              Raised So far
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <header className="flex flex-row">
                    <div className="flex-1 flex items-center ">
                      <h5 className="text-2xl text-gray-700 font-semibold">
                        Frequently Asked Question [Found 3]
                      </h5>
                    </div>
                  </header>
                  <div className="my-8">
                    <div className="my-3">
                      <h6 className="text-xl text-gray-700 font-medium">
                        What does your company do ?
                      </h6>
                      <p>
                        LetzRent is an online search, compare & booking platform
                        for self-drive car rental that rewards users for
                        renting. We aggregate rental deals from multiple service
                        providers and present them to users with prices, reviews
                        & facts to make an informed decision. Currently running
                        a pilot in Bangalore by aggregating Zoomcar, Avis,
                        Mychoize & Wowcarz.
                      </p>
                    </div>
                    <div className="my-3">
                      <h6 className="text-xl text-gray-700 font-medium">
                        Where do you want to be in 5 years ?
                      </h6>
                      <p>Uber for Self Drive Car Rental</p>
                    </div>
                    <div className="my-3">
                      <h6 className="text-xl text-gray-700 font-medium">
                        Why did you choose this idea, what's your biggest
                        Obstacle?
                      </h6>
                      <p>
                        Customers want low Prices: And to get low prices 85% of
                        the consumers check at least 2 data points (Source: BCG
                        Consumer Trends). In various sectors information-centred
                        buying has been made more efficient by companies like
                        MMT for Travel, Policy bazaar for Insurance, Myntra or
                        Shopperstop for Lifestyle products. However, for rental
                        products, there is no one & to fill this need and make
                        the process efficient we launched Letzrent, hoping to
                        have a first-mover advantage and dominate the market in
                        t
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </article>
            <article
              className={
                (tabState === 3 ? "block" : "hidden") +
                " prose max-w-none lg:max-w-full xl:max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-600  prose-a:no-underline"
              }
            >
              <div className=" border border-gray-200  mt-12 w-full  px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm bg-white">
                <div className="p-4 sm:p-6 ">No Updates</div>
              </div>
            </article>
            <article
              className={
                (tabState === 4 ? "block" : "hidden") +
                " prose max-w-none lg:max-w-full xl:max-w-none prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-600  prose-a:no-underline"
              }
            >
              <div className=" border border-blue-200  mt-12 w-full  px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm bg-blue-50">
                <div className="p-4 sm:p-6">Not Comments found! Add one</div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="shadow-sm font-semibold text-base leading-6 border border-blue-600  text-blue-600 flex-row rounded-lg py-2 px-4 inline-flex justify-center  hover:bg-gray-50">
                  Add Comment
                </button>
              </div>
            </article>
          </div>
          <aside className="  overflow-hidden basis-1/3 lg:pl-5 lg:py-2 prose max-w-none">
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-blue-700 font-semibold">₹ 0</h5>
                  <p className="text-sm">0 % of minimum goal raised</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">0</h5>
                  <p className="text-sm">Total Investors</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    0 Days
                  </h5>
                  <p className="text-sm">Left to Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-red-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-red-500">
                    Campaign Expired
                  </button>
                  <p className="text-sm">₹ 1000 Minimum Investment </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 2000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>LetzRent Premium Apparel (T-shirts & Coffee Mug)</li>
                    <li>Early access to new features & promotions</li>
                    <li>TNC : Limited to the first 100</li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 5000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>
                      LetzRent Premium Apparel Box (T-shirts, Sweatshirts &
                      additional Swag){" "}
                    </li>
                    <li>Early access to new features & promotions</li>
                    <li>TNC : Limited to the first 200</li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 10000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>
                      {" "}
                      Exclusive interest in owning equity with an investment of
                      ₹50,000 — ₹2,00,000{" "}
                    </li>
                    <li>Invite to exclusive LetzRent team chat</li>
                    <li>
                      LetzRent Premium Apparel Box (T-shirts, Sweatshirts &
                      additional Swag)
                    </li>
                    <li>Early access to new features & promotions</li>
                    <li>
                      TNC : Equity benefits with no voting rights. Limited to
                      the first 5 investors.
                    </li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 25000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>
                      Exclusive interest in owning equity with an investment of
                      ₹3,00,000 — ₹10,00,000
                    </li>
                    <li>One-on-one 30 minute video call with Co-Founders</li>
                    <li>
                      Invite to exclusive LetzRent team chat • LetzRent Premium
                      Apparel Box (T-shirts, Sweatshirts & additional Swag)
                    </li>
                    <li>Early access to new features & promotions</li>
                    <li>
                      TNC : Equity benefits with no voting rights. Limited to
                      the first 5 investors.
                    </li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 50000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>
                      Exclusive interest in owning equity with an investment of
                      ₹11,00,000 — ₹30,00,000
                    </li>
                    <li>
                      In-Person dinner with Co-Founder in Whitefield, Bangalore
                      • One-on-one 30 minute video call with Co-Founders{" "}
                    </li>
                    <li>Invite to exclusive LetzRent team chat</li>
                    <li>
                      LetzRent Premium Apparel Box (T-shirts, Sweatshirts &
                      additional Swag){" "}
                    </li>
                    <li>Early access to new features & promotions</li>
                    <li>
                      TNC : Equity benefits with voting rights. Limited to the
                      first 5 investors.
                    </li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  mt-12 w-full  mb-2 px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
              <div className="p-4 sm:p-6">
                <div className="last:mb-0 mb-8">
                  <h5 className="text-4xl text-gray-700 font-semibold">
                    ₹ 100000
                  </h5>
                  <p className="text-sm">Invest</p>
                </div>
                <div className="last:mb-0 mb-8">
                  <ul>
                    <li>
                      Exclusive interest in owning equity with an investment of
                      above ₹40,00,000{" "}
                    </li>
                    <li>LetzRent Weekend Experience: Flight & Hotel on us</li>
                    <li>
                      In-Person dinner with Co-Founder in Whitefield, Bangalore
                      • One-on-one 30 minute video call with Co-Founders{" "}
                    </li>
                    <li>Invite to exclusive LetzRent team chat </li>
                    <li>
                      LetzRent Premium Apparel Box (T-shirts, Sweatshirts &
                      additional Swag)
                    </li>
                    <li>Early access to new features & promotions</li>
                    <li>
                      TNC : Equity benefits with voting rights(open for
                      discussion of term sheet). Limited to the first 2
                      investors.
                    </li>
                  </ul>
                </div>
                <div className="last:mb-0 mb-8">
                  <button className="w-full shadow-sm font-semibold text-base leading-6 border border-blue-500  flex-row  text-white rounded-lg py-2 px-4 inline-flex justify-center  bg-blue-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
export default CompanyDetail;
