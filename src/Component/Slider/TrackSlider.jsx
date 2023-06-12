import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: false,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[url('../../assets/bg.png')]  py-14 mx-auto overflow-hidden">
       
     
        <div className="flex mb-10 flex-col lg:flex-row gap-y-2 items-center justify-center text-white gap-x-10">
          <h1 className="font-ab lg:text-5xl text-xl text-center  text-white uppercase px-3">
            Check all of our Event and get it now
          </h1>
          <button className="px-5 py-2 text-xl hover:bg-black hover:text-white transition-colors	rounded-2xl bg-white text-black">
            View All{" "}
          </button>
        </div>

        <div className="container mx-auto px-5">
          <Slider {...settings}>
            <div className="relative">
              <img
                src="./assets/artem-bali-680991-unsplash-1-400x400.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src="./assets/artem-bali-680991-unsplash23-400x400.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src="./assets/artem-bali-680991-unsplash23-400x400.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src="./assets/artem-bali-680991-unsplash2-400x400.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src="./assets/artem-bali-680991-unsplash-1-400x400.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="contact mt-3 flex-col lg:flex-row justify-center items-center px-7 lg:px-0 m-0">
          <h2 className="contact-title px-5 md:px-10 font-ab leading-10 text-center text-lg lg:text-6xl">
            Do you have a project? <br />I would love to help.
          </h2>
          <div className="contact-form">
            <label for="name">
              <span className="input-name">Name:</span>
              <input type="text" name="name" id="name" className="name"></input>
            </label>
            <label for="email">
              <span className="input-name">Email address:</span>
              <input
                type="text"
                name="email"
                id="email"
                className="email"
              ></input>
            </label>
            <label for="project-info">
              <span className="input-name">Tell about your project:</span>
              <textarea
                name="project-info"
                id="project-info"
                className="project-info"
              ></textarea>
            </label>
            <button className="btn send-btn">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackSlider;
