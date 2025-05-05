import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Github, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* Replaced Cpu icon and span with Image */}
              <Image 
                src={"/images/logo-softnovax-blue.webp" }
                alt="SoftNovaX Logo" 
                width={200} 
                height={60} 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering innovation with cutting-edge technology solutions for the future.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Rest of the footer remains the same... */}
          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              {/* <Link href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link> */}
              <Link href="#news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                News
              </Link>
              <Link href="#partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
            </nav>
          </div>

          {/* Products and Services */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="https://regalia-front.vercel.app/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                SubaStar
              </Link>
             
            </nav>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              {/* <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Innovation Drive, Tech City, CA 94103
                </span>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  info@softnovax.com
                </span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div> */}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Softnovax Solutions. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}