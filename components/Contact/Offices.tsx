"use client";
import { Button } from "../Button";
import Header from "../Header";
import Image from "next/image";
import { useState } from "react";

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
    <div>
      <Header title="Our Offices" />

      <div>
        <Image src={previousCityImage} alt="Office" width={400} height={400} />

        <div>
          <Image
            src={currentOfficeImage}
            alt="Office"
            width={400}
            height={400}
          />
        </div>
        <Image src={nextCityImage} alt="Office" width={400} height={400} />
      </div>
      <div>
        <h1 className="big-paragraph">{currentCity}</h1>
        <p className="subheading">{currentOfficeAddress}</p>
        <a className="subheading">(602) 888-1581</a>
        <Button variant={"secondary"} onClick={changeCity}>
          {nextCity}
        </Button>
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
