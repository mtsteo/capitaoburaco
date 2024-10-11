"use client";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BannerCarousel() {
  const banners = [
    {
      title: "Summer Sale",
      description: "Up to 50% off on all summer items!",
      bgColor: "bg-blue-500",
    },
    {
      title: "New Arrivals",
      description: "Check out our latest collection!",
      bgColor: "bg-green-500",
    },
    {
      title: "Free Shipping",
      description: "On orders over $50. Limited time offer!",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-[95%] mx-auto "
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <Card className={`${banner.bgColor} text-white`}>
              <CardContent className="flex flex-col items-center justify-center  sm:h-96 p-6">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                  {banner.title}
                </h2>
                <p className="text-lg sm:text-xl text-center">
                  {banner.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  );
}
