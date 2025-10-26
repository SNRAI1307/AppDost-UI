// appdost-ui/components/Footer.tsx
import Link from "next/link";
import Image from "next/image"; // Use Image for the logo
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0a0f22] text-gray-300"> {/* Added id="contact" for homepage linking */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 p-2 bg-white rounded-lg w-fit">
              <Image
                src="/logo.png" // Use the new "AD" logo
                alt="AppDost Logo"
                width={168}
                height={40}
              />
            </div>
            <p className="text-sm mb-6 max-w-xs">
              Delivering innovative IT solutions since 2025. We transform
              ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex items-center mt-4">
               <h4 className="text-lg font-semibold text-white mr-6">10+ <span className="text-sm text-gray-400 font-normal">Web Projects</span></h4>
               <h4 className="text-lg font-semibold text-white mr-6">4+ <span className="text-sm text-gray-400 font-normal">Android Apps</span></h4>
            </div>
             <h4 className="text-lg font-semibold text-white mt-2">1 <span className="text-sm text-gray-400 font-normal">CRM System</span></h4>
            <div className="flex gap-3 mt-6">
              <Link href="#" passHref>
                <Button variant="outline" size="icon" className="bg-gray-700 border-gray-600 hover:bg-white hover:text-primary rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="outline" size="icon" className="bg-gray-700 border-gray-600 hover:bg-white hover:text-primary rounded-full">
                  <Facebook className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="outline" size="icon" className="bg-gray-700 border-gray-600 hover:bg-white hover:text-primary rounded-full">
                  <Instagram className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-blue-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white">Services</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-white">Careers</Link></li>
              {/* <<< UPDATED LINK HERE */}
              <li><Link href="/blog" className="text-sm hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
           <div>
            <h4 className="font-semibold text-white text-lg mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-blue-500">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-white">Android App Development</Link></li>
              <li><Link href="#" className="text-sm hover:text-white">Web Development</Link></li>
              <li><Link href="#" className="text-sm hover:text-white">UI/UX Design</Link></li>
              <li><Link href="#" className="text-sm hover:text-white">CRM Software</Link></li>
              <li><Link href="#" className="text-sm hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="#" className="text-sm hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-blue-500">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm"><Mail className="w-4 h-4 mt-1 text-blue-500"/> contact@appdost.in</li>
              <li className="flex items-start gap-3 text-sm"><Phone className="w-4 h-4 mt-1 text-blue-500"/> +91 76350 75422 / +91 11 6929 0750</li>
              <li className="flex items-start gap-3 text-sm"><MapPin className="w-4 h-4 mt-1 text-blue-500"/> 3 Offices: Banka (HQ), Motihari, Patna</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AppDost - Complete IT Solution. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
           <p className="text-gray-400">
            Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};