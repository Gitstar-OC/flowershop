"use client";
import { Button } from "../Button";
import Header from "../Header";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "../Vector";

/*




CURSOR INTO MAP PIN WHEN HOVERED OVER THE IMAGE OR THE ADDRESS





*/

const Offices = () => {
  const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);

  function changeCity() {
    setCurrentOfficeIndex((currentOfficeIndex + 1) % OfficeLocations.length);
  }

  const currentOfficeLocation = OfficeLocations[currentOfficeIndex];
  const currentCity = currentOfficeLocation.city;
  const currentOfficeAddress = currentOfficeLocation.address;
  const nextCity =
    OfficeLocations[(currentOfficeIndex + 1) % OfficeLocations.length].city;
  const currentOfficeImage = currentOfficeLocation.image;
  const nextCityImage =
    OfficeLocations[(currentOfficeIndex + 1) % OfficeLocations.length].image;
  const previousCityImage =
    OfficeLocations[
      (currentOfficeIndex - 1 + OfficeLocations.length) % OfficeLocations.length
    ].image;

  return (
    <div className="pb-20">
      <Header title="Our Offices" />

      <div className="mt-20 flex items-start gap-20">
        <div className="relative h-100">
          <div className="absolute -left-10 top-10 scale-95 opacity-40 z-0 rounded-xl overflow-hidden">
            <Image
              src={previousCityImage}
              alt="Office"
              width={520}
              height={340}
            />
          </div>

          <div className="absolute -right-10 top-10 scale-95 opacity-40 z-0 rounded-xl overflow-hidden">
            <Image src={nextCityImage} alt="Office" width={520} height={340} />
          </div>

          <div className="relative z-10 p-4 bg-white rounded-[14px] shadow">
            <Image
              src={currentOfficeImage}
              alt="Office"
              width={675}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex-col items-start ">
          <div className="max-w-md space-y-4 mr-auto">
            <h1 className="big-paragraph">{currentCity}</h1>

            <p className="subheading text-balance whitespace-pre-line">
              {currentOfficeAddress}
            </p>

            <a className="subheading hover:underline">(602) 888-1581</a>
          </div>
          <Button
            variant={"secondary"}
            className="cursor-pointer"
            onClick={changeCity}
          >
            {nextCity}{" "}
            <ArrowRight className="ml-2 mt-px transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offices;

const OfficeLocations = [
  {
    city: "New York",
    address: `230 Park Avenue
Suite 300
New York City, New York 10169`,
    state: "NY",
    image: "/images/offices/ny-office.jpg",
  },
  {
    city: "Atlanta",
    address: `715 Peachtree Street North East
Suite 100
Atlanta, Georgia 30308`,
    state: "GA",
    image: "/images/offices/ga-office.jpg",
  },
  {
    city: "Scottsdale",
    address: `15169 N. Scottsdale Rd.
Suite 205
Scottsdale, Arizona 85254`,
    state: "AZ",
    image: "/images/offices/az-office.jpg",
  },
];
