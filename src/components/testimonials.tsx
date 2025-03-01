import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import { useTheme } from "./theme-provider";

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Video Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      content:
        "Best video downloader I've ever used! Fast, easy to use, and supports all the platforms I need.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Content Creator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      content:
        "I use VideoMaster daily for my work, and it has saved me so much time and effort. The quality is excellent and the advanced options are great.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "University Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      content:
        "As a student, I often need to download educational videos, and VideoMaster provides an excellent service without complications. Highly recommended!",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Wilson",
      role: "Blogger",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      content:
        "I love how I can download videos in 4K quality and convert them to any format I need. VideoMaster has become an essential tool for my content creation.",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thousands of users worldwide trust VideoMaster for downloading and
            converting videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:border-purple-500/50 transform hover:-translate-y-1 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-400">
          <div
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl border p-8 max-w-4xl mx-auto`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Join our growing community
                </h3>
                <p className="text-gray-400">
                  Over 2 million monthly active users trust VideoMaster
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    2M+
                  </div>
                  <div className="text-sm text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    150+
                  </div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    4.9
                  </div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
