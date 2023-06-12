// import React from "react";
import { MdOutlineSms } from "react-icons/md";
import { BsTiktok } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillCloud,
  AiFillYoutube,
  AiFillApple,
} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";

const Banner = () => {
  return (
    <div className=" relative h-[93vh] overflow-hidden">
     <div className="hidden md:block">
     <video width='100%' height='100%'  className="" autoplay="autoplay" loop="true" muted>
        <source
          src="https://d2cstorage-a.akamaihd.net/atl/nogaerez/NogaErez_Nails_WEB.mp4"
          type="video/mp4"
        />
        <source
          src="https://d2cstorage-a.akamaihd.net/atl/nogaerez/NogaErez_Nails_WEB.mp4"
          type="video/mp4"
        />
      </video>
     </div>
     <div className="md:hidden block  ">
     <video  className="object-cover w-full h-screen " autoplay="autoplay" loop="true" muted>
        <source
          src="https://d2cstorage-a.akamaihd.net/atl/nogaerez/NogaErez_Nails_WEB.mp4"
          type="video/mp4"
        />
        <source
          src="https://d2cstorage-a.akamaihd.net/atl/nogaerez/NogaErez_Nails_WEB.mp4"
          type="video/mp4"
        />
      </video>
     </div>
      <div className="absolute top-[10%] left-[15%] md:top-1/2 md:left-1/2 z-50 flex flex-col justify-center items-center md:translate-x-[-50%] md:translate-y-[-50%]">
        <img
          className="w-[320px] h-[320px]"
          src="https://www.nogaerez.com/sites/g/files/g2000013861/files/2022-02/Loading_V1-edited.gif"
        ></img>
        <h1 className=" text-white font-medium text-1xl lg:text-[28px] fontpopins absolute top-[260px]">
          NOGA EREZ
        </h1>
      </div>
      <div className="absolute md:bottom-4 md:left-5 bottom-36 left-32">
        {" "}
        <a
          className=""
          href="https://nogaerez.lnk.to/NAILSfeatMissyElliott"
          target="_blank"
          custom-link-name="NAILS (feat. Missy Elliott) Button Linkfire (header)"
        >
          <button className="bg-white text-black px-10 py-2">
            MENATL WASTE <br />
            <span className="text-xs">out on 23.11.2023</span>
          </button>
        </a>
      </div>
      <div className="text-white absolute bottom-10 right-20 md:bottom-4 md:right-5 flex gap-x-3">
        <MdOutlineSms size={25} />
        <BsTiktok size={25} />
        <AiOutlineFacebook size={25} />
        <AiOutlineTwitter size={25} />
        <FiInstagram size={25} />
        <AiFillCloud size={25} />
        <AiFillYoutube size={25} />
        <SlSocialSpotify size={25} />
        <AiFillApple size={25} />
      </div>

      <></>
    </div>
  );
};

export default Banner;
