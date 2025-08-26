import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com/hckerson_jnr",
      icon: Twitter,
    },
    {
      name: "Facebook",
      link: "https://facebook.com/hckerson_jnr",
      icon: Facebook,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/hckerson_jnr",
      icon: Instagram,
    },
    {
      name: "Youtube",
      link: "https://youtube.com/hckerson_jnr",
      icon: Youtube,
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/hckerson_jnr",
      icon: Linkedin,
    },
  ];

  const left = [
    { name: "Our Service", link: "/about" },
    { name: "Projects", link: "/project" },
    { name: "Our Process", link: "/process" },
    { name: "Referral program", link: "/program" },
    { name: "Booking", link: "/booking" },
    { name: "Referral ", link: "/program" },
    { name: "program", link: "/booking" },
  ];

  const right = [
    { name: "Our Rooms", link: "/imgs/room" },
    { name: "Resource", link: "/resource" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Booking", link: "/booking" },
    { name: "program", link: "/booking" },
  ];

  return (
    <footer className="bg-black p-8 text-stone-400 ">
      {/* Logo and About */}
      <div className="space-y-4">
        <main className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="left flex flex-col space-y-8 border-r border-stone-100/20">
            <Logo color="text-stone-400" />
            <p
              style={{ maxWidth: "35ch" }}
              className="text-base font-normal text-wrap bg-linear-to-r from-stone-500 to-stone-700 bg-clip-text  text-transparent"
            >
              Not just a room, but an experience of rest,
              <span className="">warmth and genuine care.</span>
            </p>
            <div className="text-sm font-semibold space-y-3 ">
              <p>Suscribe to our newsletter</p>
              <input
                type="email"
                name=""
                id=""
                placeholder="Your email address"
                className="  p-3 rounded-3xl outline-none inset-shadow-sm inset-shadow-gray-700  placeholder:text-sm placeholder:font-normal"
              />
            </div>
          </div>
          <div className="right flex border-r border-stone-100/20">
            <ul className="flex flex-col w-[400px]">
              {left.map((link) => {
                return (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="p-3 shadow-2xl/30"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
            <ul className="flex flex-col ">
              {right.map((link) => {
                return (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="p-3 text-nowrap"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </main>
        <div className="flex space-x-2">
          {socials.map((social) => {
            const ICON = social.icon;
            return (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <ICON className="h-4 w-4" />
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
