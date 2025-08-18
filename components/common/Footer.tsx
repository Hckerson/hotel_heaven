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

  return (
    <footer className="bg-muted/40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="space-y-4">
          <Logo />
          <div className="flex space-x-2">
            <Link
              href="https://twitter.com/hckerson_jnr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://facebook.com/hckerson.jnr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://instagram.com/hckerson_jnr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/hckerson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
