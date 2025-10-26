import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Removed AvatarImage as it wasn't used
import { Clock } from "lucide-react";



export const Blog = () => {
  return (
    <div id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added id="blog" for homepage linking */}
      <div className="text-center">
        <span className="text-sm font-semibold bg-purple-100 text-primary px-3 py-1 rounded-full">
          LATEST UPDATES
        </span>
        <h2 className="text-3xl font-extrabold text-foreground mt-4">
          Insights & <span className="text-primary">Tech Articles</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
          Stay informed with our latest insights, tech trends, and industry
          expertise.
        </p>
      </div>

      
      <div className="flex justify-center">
        <Card className="max-w-md overflow-hidden group rounded-2xl shadow-lg">
          <CardContent className="p-0">
            <Image
              src="/blog/placeholder-article.svg"
              alt="Blog post placeholder"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </CardContent>
          <CardFooter className="p-6 flex flex-col items-start">
            <div className="w-full flex justify-between items-center mb-2">
              <span className="text-sm text-primary font-semibold uppercase bg-purple-100 px-3 py-1 rounded-full">
                DESIGN
              </span>
              <span className="flex items-center text-xs text-muted-foreground gap-1">
                <Clock className="w-3 h-3" /> 12 min
              </span>
            </div>
            
            <h3 className="text-xl font-semibold my-2">
              TestDisabled This account doesn&apos;t meet our policy...
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              TestDisabled This account doesn&apos;t meet our policy guidelines.
              Disabled This...
            </p>
            <div className="w-full flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">AP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">AppDost Team</p>
                  <p className="text-xs text-muted-foreground">Oct 25, 2025</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full text-primary hover:bg-purple-100">
                &rarr;
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" className="rounded-full">
           {/* <<< UPDATED LINK HERE */}
          <Link href="/blog">View All Articles &rarr;</Link>
        </Button>
      </div>
    </div>
  );
};