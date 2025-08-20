import "swiper/css";
import clsx from "clsx";
import Link from "next/link";
import Swiper from "swiper";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const reviews = [
    { name: "Employers", number: "50k+" },
    { name: "Users globally", number: "05M+" },
    { name: "Positive reviews", number: "98%" },
    { name: "Years in business", number: "15+" },
  ];

  const people = [
    {
      image: "/alii.png",
      name: "Michael Carter",
      position: "Senior sales strategist",
      socials: [
        {
          name: "instagram",
          link: "https://www.instagram.com/michael_carter",
          icon: Instagram,
        },
        {
          name: "linkedin",
          link: "https://linkedin.com/michael_carter",
          icon: Linkedin,
        },
      ],
    },
    {
      image: "/hannahh.png",
      name: "Ryan Davis",
      position: "HR Head",
      socials: [
        {
          name: "instagram",
          link: "https://www.instagram.com/ryan_davis",
          icon: Instagram,
        },
        {
          name: "linkedin",
          link: "https://linkedin.com/ryan_davis",
          icon: Linkedin,
        },
      ],
    },
    {
      image: "/christianaa.png",
      name: "Jessica Walker",
      position: "Customer  Successs Manager",
      socials: [
        {
          name: "instagram",
          link: "https://www.instagram.com/jessica_walker",
          icon: Instagram,
        },
        {
          name: "linkedin",
          link: "https://linkedin.com/jessica_walker",
          icon: Linkedin,
        },
      ],
    },
  ];
  return (
    <>
      <main className="w-full box-border flex flex-col bg-red-50 pt-36 space-y-16">
        <section className="lg:grid lg:grid-cols-2 items-end px-16 ">
          <div className="grid ">
            <span className="text-amber-300 text-lg font-semibold">
              We are professionals
            </span>
            <p style={{ maxWidth: "20ch" }} className="text-6xl font-bold ">
              We set out a better standard to treat{" "}
              <span className="text-black/40">customers</span>
            </p>
          </div>
          <div style={{ maxWidth: "30ch" }} className="text-sm">
            Together-the investors and partners of investigate-we are
            reinventing real estate investing end-to-end
          </div>
        </section>
        <section className="overflow-hidden box-border w-full h-[calc(100vh-450px)]">
          <div className="grid gap-x-4 w-full lg:grid-cols-3 px-4 items-center justify-center">
            <Image
              src={`/showcase-3.jpg`}
              alt="room"
              width={700}
              height={300}
              className="[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]"
            ></Image>
            <Image
              src={`/showcase-2.jpg`}
              alt="room"
              width={700}
              height={300}
              className="[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]"
            ></Image>
            <Image
              src={`/showcase-1.jpg`}
              alt="room"
              width={700}
              height={300}
              className="[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]"
            ></Image>
          </div>
        </section>
        <section className="grid items-center justify-center bg-black py-16">
          <section className="grid lg:gap-y-[80px] items-center justify-center">
            <div className="grid items-center justify-center">
              <span
                style={{ maxWidth: "15ch" }}
                className="text-4xl text-center font-normal text-wrap bg-linear-to-r from-stone-500 via-20% via-stone-300 to-80% to-stone-500 bg-clip-text  text-transparent"
              >
                Our proven suceesess stories
              </span>
            </div>
            <div className="grid lg:grid-cols-4  ">
              {reviews.map((review, idx) => {
                return (
                  <div
                    key={review.name}
                    className={clsx(
                      `grid gap-y-3 px-16 bg-linear-to-br text-transparent from-stone-200 to-stone-500 bg-clip-text`,
                      idx != reviews.length - 1
                        ? "border-r border-stone-100/20"
                        : "",
                    )}
                  >
                    <span className="text-4xl">{review.number}</span>
                    <p>{review.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid justify-center ">
              <p className=" font-semibold text-3xl text-center text-stone-200">
                Meet out experts
              </p>
              <span
                style={{ maxWidth: "70ch" }}
                className="text-center text-stone-400 flex font-medium text-sm"
              >
                {/* <div className="w-[200px] "></div> */}
                Discover the passionate team of innovators, strategist and
                customer success professionals working tiredlessly together to
                help achieve your goals
                {/* <div className="w-[200px] "></div> */}
              </span>
            </div>
          </section>

          <div className="grid gap-x-8 lg:grid-cols-3 my-16 size-fit justify-center ">
            {people.map((person) => {
              return (
                <div
                  key={person.name}
                  className="rounded-3xl box-border h-[300px] w-[350px] text-white"
                >
                  <div className="flex flex-col rounded-3xl h-[300px] w-[350px]">
                    <div className="h-[300px] w-[350px]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        className="h-[300px] w-[350px] rounded-t-3xl"
                        width={1920}
                        height={2880}
                      ></Image>
                    </div>
                    <div className="px-3 py-4 flex items-center">
                      <div className="flex-1">
                        <span className="text-lg font-semibold">
                          {person.name}
                        </span>
                        <p className="text-sm font-medium">{person.position}</p>
                      </div>
                      <div className="flex space-x-2">
                        {person?.socials &&
                          person.socials.map((social) => {
                            const Icon = social.icon;
                            return (
                              <Link
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={person.name}
                              >
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                >
                                  <Icon className="h-6 w-6" />
                                </Button>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="grid gap-y-12">
          <div className="grid items-center justify-center">
            <span
              style={{ maxWidth: "17ch" }}
              className="text-4xl text-center font-normal text-wrap bg-linear-to-r from-black to-70% to-stone-600 bg-clip-text  text-transparent"
            >
              What our customers are saying
            </span>
          </div>
        </section>
        <div className="grid gap-y-16">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
