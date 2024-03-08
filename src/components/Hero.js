import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const TherapyOption = ({ title, imageUrl, altText, linkTo }) => (
    <div className="max-md:ml-0 max-md:w-full group">
      <div className="flex flex-col  items-center p-10  w-full text-black whitespace-nowrap bg-white rounded-lg hover:bg-lightyellow max-md:mt-6 ">
        <div className="justify-center text-2xl max-md:px-5 group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:top-8 ">
          {title}
        </div>

        <Link to={linkTo} className="hero-img-link">
          <img
            loading="lazy"
            src={require(`${imageUrl}`)}
            alt={altText}
            className="hero-img transition ease-in-out duration-700 hover:scale-125 w-52"
          />
        </Link>
        <div className="invisible group-hover:visible group-hover:flex w-full justify-end ">
          <div className="border-solid border-2 border-gray-800 rounded-full h-5 w-5 text-center flex justify-center items-center font-bold">
            +
          </div>
        </div>
      </div>
    </div>
  );

  const therapyOptions = [
    {
      title: "Individual Therapy",
      imageUrl: "./images/Individual-Therapy-img.png",
      altText: "An icon representing individual therapy",
      linkTo: "/individual-therapy",
    },
    {
      title: "Group Therapy",
      imageUrl: "./images/Group-Therapy-img.png",
      altText: "An icon representing group therapy",
      linkTo: "/group-therapy",
    },
    {
      title: "Support Group",
      imageUrl: "./images/Support_Group-img.png",
      altText: "An icon representing support group",
      linkTo: "/support-group",
    },
  ];

  return (
    <div>
      <main className="flex justify-center items-center px-16 py-12 bg-skyblue max-md:px-5">
        <div className="flex flex-col items-center mt-8 w-full max-w-[1128px] max-md:max-w-full">
          <header className="text-5xl font-extralight  text-neutral-900 max-md:max-w-full max-md:text-4xl">
            Find Your Path to Mental Wellness with AroundWithin
          </header>
          <section className="mt-8 text-3xl font-extralight leading-10 text-center text-zinc-800 max-md-w-full">
            Join a community of individuals committed to mental well-being and
            gain access to valuable resources and support
          </section>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center gap-10 max-md:flex-col max-md:gap-0 max-md:">
              {therapyOptions.map((option) => (
                <TherapyOption
                  key={option.title}
                  title={option.title}
                  imageUrl={option.imageUrl}
                  altText={option.altText}
                  linkTo={option.linkTo}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
