import React from "react";
import banner1 from "../../../assets/banner 1.jpg";
import banner2 from "../../../assets/banner 2.jpg";
import banner3 from "../../../assets/benner 3.jpg";
import banner4 from "../../../assets/banner 4.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[55rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#252424] opacity-90"></div>

          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <h2 class="md:text-6xl text-3xl font-extrabold">EXPLORE , THE</h2>
              <br />
              <h2 class="md:text-6xl text-3xl text-red-600 font-extrabold uppercase">
                luxurious and modern homes.
              </h2>
              <p class="mt-4 px-16">
                Holding Reality is a residential real estate website designed to
                showcase luxurious and modern homes. It offers detailed listings
                for premium properties, including apartments, villas, and gated
                communities, with a focus on high-end features and contemporary
                living. Users can explore properties through interactive
                galleries, 3D tours, and neighborhood insights, making it easy
                to find the perfect home.
              </p>
              <div>
                <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                  About more
                </button>
                <button className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg m-5">
                  Explore me
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#080303] opacity-90"></div>
          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <h2 class="md:text-6xl text-3xl font-extrabold">
                WELCOME , TO THE
              </h2>
              <br />
              <h2 class="md:text-6xl text-3xl text-red-600 font-extrabold">
                HOLDINGS REALITY
              </h2>
              <p class="mt-4 px-16">
                Holding Reality is a residential real estate website designed to
                showcase luxurious and modern homes. It offers detailed listings
                for premium properties, including apartments, villas, and gated
                communities, with a focus on high-end features and contemporary
                living. Users can explore properties through interactive
                galleries, 3D tours, and neighborhood insights, making it easy
                to find the perfect home.
              </p>
              <div>
                <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                  About more
                </button>
                <button className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg m-5">
                  Explore me
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#080303] opacity-90"></div>
          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <h2 class="md:text-6xl text-3xl font-extrabold">
                GET EXCITING OFFERS ON
              </h2>
              <br />
              <h2 class="md:text-6xl text-3xl text-red-600 font-extrabold">
                HOLDINGS REALITY
              </h2>
              <p class="mt-4 px-16">
                Holding Reality is a residential real estate website designed to
                showcase luxurious and modern homes. It offers detailed listings
                for premium properties, including apartments, villas, and gated
                communities, with a focus on high-end features and contemporary
                living. Users can explore properties through interactive
                galleries, 3D tours, and neighborhood insights, making it easy
                to find the perfect home.
              </p>
              <div>
                <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                  About more
                </button>
                <button className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg m-5">
                  Explore me
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#2a2a2b] to-[#080303] opacity-90"></div>
          <div class="absolute inset-0 flex justify-center items-center">
            <div class="text-center text-white">
              <h2 class="md:text-6xl text-3xl font-extrabold uppercase">
                Users can explore properties through{" "}
              </h2>
              <br />
              <h2 class="md:text-6xl text-3xl text-red-600 font-extrabold">
                HOLDINGS REALITY
              </h2>
              <p class="mt-4 px-16">
                Holding Reality is a residential real estate website designed to
                showcase luxurious and modern homes. It offers detailed listings
                for premium properties, including apartments, villas, and gated
                communities, with a focus on high-end features and contemporary
                living. Users can explore properties through interactive
                galleries, 3D tours, and neighborhood insights, making it easy
                to find the perfect home.
              </p>
              <div>
                <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg">
                  About more
                </button>
                <button className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg m-5">
                  Explore me
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
