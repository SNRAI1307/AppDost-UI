// components/ContactFormSection.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Clock, Coffee, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const ContactFormSection = () => {
  // Add form handling logic here later (e.g., using react-hook-form)
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">Send Us a Message</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-muted-foreground mb-8">Fill out the form and we&apos;ll get back to you within 24 hours</p>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <Input id="fullName" placeholder="John Doe" required className="rounded-lg"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="rounded-lg"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <Input id="phone" placeholder="+91 98765 43210" required className="rounded-lg"/>
                </div>
                <div>
                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                   <Select required>
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development Inquiry</SelectItem>
                      <SelectItem value="mobile">Mobile App Inquiry</SelectItem>
                      <SelectItem value="consulting">Consulting Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry... (minimum 20 characters)" required minLength={20} rows={5} className="rounded-lg"/>
                     <p className="text-xs text-muted-foreground mt-1">Please provide as much detail as possible</p>
                  </div>
                <Button type="submit" size="lg" className="rounded-full w-full bg-gradient-to-r from-primary to-blue-600">Send Message &rarr;</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right: Office Details */}
        <div>
          <h2 className="text-3xl font-extrabold text-foreground mb-2">Our Office</h2>
           <div className="w-20 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-muted-foreground mb-8">Visit us or schedule a virtual meeting</p>
          
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                 <Image src="/icons/office-hq.svg" alt="Headquarters" width={48} height={48} />
                 <div>
                    <h4 className="font-semibold text-gray-800">AppDost Headquarters</h4>
                    <p className="text-sm text-muted-foreground">Headquarters</p>
                    <p className="text-xs text-gray-500 mt-1">Haveli Lakarikola, Banka, Bihar 813102</p>
                 </div>
              </div>
               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                 <Image src="/icons/office-branch.svg" alt="Branch Offices" width={48} height={48} />
                 <div>
                    <h4 className="font-semibold text-gray-800">Branch Offices</h4>
                    <p className="text-xs text-gray-500 mt-1">Motihari (Bihar 845401) • Patna (Bihar 800003)</p>
                 </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                 <Image src="/icons/office-clock.svg" alt="Business Hours" width={48} height={48} />
                 <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="text-xs text-gray-500 mt-1">9:00 AM - 6:00 PM IST</p>
                 </div>
              </div>
               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                 <Image src="/icons/office-lunch.svg" alt="Lunch Break" width={48} height={48} />
                 <div>
                    <h4 className="font-semibold text-gray-800">Lunch Break</h4>
                    <p className="text-xs text-gray-500 mt-1">1:00 PM - 2:00 PM IST</p>
                 </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                 <Image src="/icons/office-emergency.svg" alt="Emergency Support" width={48} height={48} />
                 <div>
                    <h4 className="font-semibold text-red-800">Emergency Support</h4>
                    <p className="text-xs text-red-600 mt-1">24/7 for existing clients</p>
                 </div>
              </div>
            </CardContent>
          </Card>

           <Card className="rounded-2xl shadow-lg mt-8 bg-gradient-to-br from-primary to-blue-600 text-white">
             <CardContent className="p-8 flex flex-col items-center text-center">
                <Image src="/icons/contact-map.svg" alt="Map" width={64} height={64} className="mb-4 bg-white/20 p-3 rounded-xl"/>
                <h4 className="text-xl font-semibold mb-2">Multiple Locations in Bihar</h4>
                <p className="text-sm text-blue-100 mb-4">Banka • Motihari • Patna</p>
                <Button asChild variant="secondary" className="rounded-full text-primary hover:bg-gray-200">
                  <Link href="#office-locations">View HQ Location &rarr;</Link>
                </Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
};