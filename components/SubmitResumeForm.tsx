// components/SubmitResumeForm.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const SubmitResumeForm = () => {
  // Add form handling logic here later
  return (
    <section id="submit-resume" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <h2 className="text-3xl font-extrabold text-center text-foreground">Submit Your Resume</h2>
       <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
          We&apos;ll keep your profile on file and reach out when suitable opportunities arise
        </p>

       <Card className="max-w-2xl mx-auto rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                <Input id="fullName" placeholder="John Doe" required className="rounded-lg"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                <Input id="email" type="email" placeholder="john@example.com" required className="rounded-lg"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                <Input id="phone" placeholder="+91 98765 43210" required className="rounded-lg"/>
              </div>
              <div>
                 <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest <span className="text-red-500">*</span></label>
                 <Select required>
                  <SelectTrigger className="w-full rounded-lg">
                    <SelectValue placeholder="Select Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="qa">Quality Assurance</SelectItem>
                     <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience <span className="text-red-500">*</span></label>
                  <Input id="experience" placeholder="e.g., Fresher, 2 years, etc." required className="rounded-lg"/>
                </div>
               <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself <span className="text-red-500">*</span></label>
                  <Textarea id="about" placeholder="Your skills, experience, projects, and what you're looking for..." required minLength={20} rows={5} className="rounded-lg"/>
                </div>
              {/* Add Resume Upload Field Here Later */}
              {/* <div>
                 <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume <span className="text-red-500">*</span></label>
                 <Input id="resume" type="file" required className="rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary hover:file:bg-blue-100"/>
              </div> */}
              <Button type="submit" size="lg" className="rounded-full w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
    </section>
  );
};