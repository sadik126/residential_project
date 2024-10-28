import React from "react";
import about from "../../../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div
        className="hero md:min-h-[60vh] min-h-[137vh]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[67rem]">
            <h1 className="mb-5 text-5xl font-bold">About us</h1>
            <p className="mb-5">
              Residential projects are developments focused on housing,
              typically encompassing apartments, villas, and townhouses within
              planned communities. These projects are often designed with a
              variety of amenities such as parks, gyms, pools, and social
              spaces, catering to modern living needs. Residential projects can
              range from affordable housing solutions to luxury complexes, and
              they’re often located in areas with convenient access to schools,
              shopping centers, and public transit. Real estate developers may
              aim to create sustainable, eco-friendly communities, using
              energy-efficient construction materials and smart home
              technologies. These projects contribute significantly to urban
              development, meeting the growing demand for quality housing.
            </p>
            <button className="btn btn-error">About me</button>
          </div>
        </div>
      </div>

      <div className="hero mt-10  min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img src={about} className="md:w-1/2 rounded-lg shadow-2xl" />
          <div className="md:w-1/2 w-full">
            <h1 className="text-5xl font-bold mb-16 uppercase">
              What is our destination?
            </h1>
            <div className="divider divider-error w-1/4 text-center"></div>
            <div className="join join-vertical w-full mt-10">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  <p className="font-extrabold text-red-700">Sign in</p>
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quo maxime consequuntur amet quos dignissimos
                    illum nam iste aliquid illo assumenda voluptate inventore
                    placeat voluptatibus, eaque nisi repellendus consectetur
                    modi quod! Error, optio voluptate eaque exercitationem
                    deleniti accusantium quibusdam dignissimos sed perspiciatis
                    eum, sit dicta, deserunt itaque. Eius, commodi expedita.
                    Earum quidem cupiditate est, natus beatae perspiciatis fuga
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <p className=" text-red-700 font-extrabold">
                    {" "}
                    Add your bank account
                  </p>
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quo maxime consequuntur amet quos dignissimos
                    illum nam iste aliquid illo assumenda voluptate inventore
                    placeat voluptatibus, eaque nisi repellendus consectetur
                    modi quod! Error, optio voluptate eaque exercitationem
                    deleniti accusantium quibusdam dignissimos sed perspiciatis
                    eum, sit dicta, deserunt itaque. Eius, commodi expedita.
                    Earum quidem cupiditate est, natus beatae perspiciatis fuga
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <p className=" text-red-700 font-extrabold">
                    Send payment Request
                  </p>
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quo maxime consequuntur amet quos dignissimos
                    illum nam iste aliquid illo assumenda voluptate inventore
                    placeat voluptatibus, eaque nisi repellendus consectetur
                    modi quod! Error, optio voluptate eaque exercitationem
                    deleniti accusantium quibusdam dignissimos sed perspiciatis
                    eum, sit dicta, deserunt itaque. Eius, commodi expedita.
                    Earum quidem cupiditate est, natus beatae perspiciatis fuga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
