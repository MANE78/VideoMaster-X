import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Zap, Shield, Sparkles } from "lucide-react";
import { useTheme } from "./theme-provider";

const PremiumFeatures = () => {
  const { theme } = useTheme();

  return (
    <div className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-1 text-sm rounded-full">
            <Sparkles className="h-4 w-4 mr-1" /> Advanced Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Powerful Video Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our powerful tools for the best video downloading
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
          {/* Feature Card 1 */}
          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:border-purple-500/50 transform hover:-translate-y-1 transition-all duration-300`}
          >
            <CardHeader className="pb-4">
              <Badge className="w-fit mb-2 bg-blue-500 hover:bg-blue-600 text-white">
                Free
              </Badge>
              <CardTitle className="text-2xl font-bold">4K Downloads</CardTitle>
              <CardDescription className="text-gray-400">
                Download videos in ultra high quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Download videos up to 4K quality</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Unlimited downloads per day</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Support for all major platforms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic video format conversion</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card
            className={`${theme === "dark" ? "bg-gradient-to-b from-purple-900/90 to-indigo-900/90 border-purple-500" : "bg-gradient-to-b from-purple-100 to-indigo-100 border-purple-300"} backdrop-blur-md shadow-2xl rounded-xl overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:border-purple-400 transform hover:-translate-y-2 transition-all duration-300 relative z-10 scale-105`}
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            <div className="absolute -top-5 right-0 left-0 flex justify-center">
              <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full shadow-lg">
                <Sparkles className="h-4 w-4 mr-1" /> Most Popular
              </Badge>
            </div>
            <CardHeader className="pb-4 pt-8">
              <Badge className="w-fit mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                Free
              </Badge>
              <CardTitle className="text-2xl font-bold">
                Batch Processing
              </CardTitle>
              <CardDescription className="text-gray-400">
                Download multiple videos at once
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Download entire playlists</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Process multiple URLs at once</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Queue management system</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Automatic retry for failed downloads</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:border-purple-500/50 transform hover:-translate-y-1 transition-all duration-300`}
          >
            <CardHeader className="pb-4">
              <Badge className="w-fit mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                <Sparkles className="h-4 w-4 mr-1" /> Free
              </Badge>
              <CardTitle className="text-2xl font-bold">
                Format Conversion
              </CardTitle>
              <CardDescription className="text-gray-400">
                Convert videos to any format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Convert to all popular formats</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Extract audio from videos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Customize output settings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Batch format conversion</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-400">
          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300`}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Lightning Fast Downloads
                  </h3>
                  <p className="text-gray-400">
                    Enjoy download speeds up to 10x faster than regular
                    downloaders with our optimized servers and advanced
                    technology.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300`}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                  <Shield className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Advanced Privacy Protection
                  </h3>
                  <p className="text-gray-400">
                    We use advanced encryption to protect your data and ensure
                    complete privacy while using our services, with no activity
                    logs kept.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl font-bold mb-4">
            Join over 2 million users worldwide
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience unmatched video downloading with VideoMaster - the
            ultimate solution for downloading and converting videos from any
            platform
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-6 text-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            Try VideoMaster Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
