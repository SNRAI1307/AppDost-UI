import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

type BlogPostCardProps = {
  title: string;
  desc: string;
  category: string;
  author: string;
  date: string;
  imgSrc: string;
  link: string;
};

export const BlogPostCard = ({
  title,
  desc,
  category,
  author,
  date,
  imgSrc,
  link,
}: BlogPostCardProps) => {
  return (
    <Card className="overflow-hidden group rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <Image
          src={imgSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardContent>
      <CardFooter className="p-6 flex flex-col items-start">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-sm text-primary font-semibold uppercase bg-purple-100 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="flex items-center text-xs text-muted-foreground gap-1">
            <Clock className="w-3 h-3" /> 12 min
          </span>
        </div>
        <h3 className="text-xl font-semibold my-2 h-14 overflow-hidden">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 h-20 overflow-hidden">
          {desc}
        </p>
        <div className="w-full border-t pt-4">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  AP
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{author}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
            <Button asChild className="rounded-full bg-gradient-to-r from-primary to-blue-600">
              <Link href={link}>Read More &rarr;</Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};