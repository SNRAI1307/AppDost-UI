// components/OfficeLocations.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const locations = [
 { 
    type: "HEADQUARTERS", 
    color: "blue",
    icon: "/icons/office-hq.svg", 
    name: "Banka Office", 
    region: "Bihar Headquarters", 
    address: "AppDost Complete IT Solution\nHaveli Lakarikola, Banka\nBihar 813102, India",
    mapLink: "#" 
 },
 { 
    type: "BRANCH", 
    color: "green",
    icon: "/icons/office-branch.svg", 
    name: "Motihari Office", 
    region: "East Champaran Branch", 
    address: "AppDost Complete IT Solution\nJanpul Chowk, Kolhuwarwa\nMotihari, Bihar 845401, India",
    mapLink: "#" 
 },
 { 
    type: "BRANCH", 
    color: "pink",
    icon: "/icons/office-branch.svg", // Re-using branch icon, adjust if needed
    name: "Patna Office", 
    region: "Capital City Branch", 
    address: "AppDost Solution Complete IT Solution\nKadamkuan, Lohanipur\nPatna, Bihar 800003, India",
    mapLink: "#" 
 },
];

// Helper to get Tailwind classes based on color
const getColorClasses = (color: string) => {
  switch(color) {
    case 'blue': return 'border-blue-500 bg-blue-50';
    case 'green': return 'border-green-500 bg-green-50';
    case 'pink': return 'border-pink-500 bg-pink-50';
    default: return 'border-gray-500 bg-gray-50';
  }
}
const getTagColorClasses = (color: string) => {
  switch(color) {
    case 'blue': return 'bg-blue-100 text-blue-700';
    case 'green': return 'bg-green-100 text-green-700';
    case 'pink': return 'bg-pink-100 text-pink-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}


export const OfficeLocations = () => {
  return (
    <section id="office-locations" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <h2 className="text-3xl font-extrabold text-center text-foreground">Our Office Locations</h2>
        <div className="flex justify-center my-4">
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
          Visit us at any of our offices across Bihar for personalized consultation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
             <Card key={loc.name} className={`rounded-2xl shadow-lg border-2 ${getColorClasses(loc.color)} overflow-hidden`}>
               <CardContent className="p-6">
                 <div className="flex justify-between items-start mb-4">
                    <Image src={loc.icon} alt={loc.type} width={48} height={48} />
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagColorClasses(loc.color)}`}>
                      {loc.type}
                    </span>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-800">{loc.name}</h3>
                 <p className="text-sm text-muted-foreground mb-4">{loc.region}</p>
                 <div className="flex items-start gap-2 text-sm text-gray-600 mb-6 whitespace-pre-line">
                   <Image src="/icons/office-map-pin.svg" alt="Map Pin" width={20} height={20} className="mt-0.5"/>
                   <span>{loc.address}</span>
                 </div>
                 <Link href={loc.mapLink} className="text-sm font-semibold text-primary hover:underline">
                   View on Map &rarr;
                 </Link>
               </CardContent>
             </Card>
          ))}
        </div>
    </section>
  );
};