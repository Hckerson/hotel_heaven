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

  return (
    <footer className="bg-black py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="space-y-4">
          <main className="flex">
            <div className="left grid gap-y-4">

              <Logo color="text-stone-400" />
            </div>
            <div className="right">sup</div>
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
      </div>
    </footer>
  );
}
