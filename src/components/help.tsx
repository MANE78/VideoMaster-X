import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  HelpCircle,
  ArrowLeft,
  Youtube,
  Video,
  FileVideo,
  Download,
  Search,
  MessageCircle,
  BookOpen,
  Info,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useTheme } from "./theme-provider";

const Help = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white" : "bg-gradient-to-b from-purple-50 via-indigo-100 to-purple-100 text-gray-900"} overflow-hidden`}
    >
      {/* Header */}
      <header
        className={`${theme === "dark" ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"} backdrop-blur-sm border-b sticky top-0 z-10 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              VideoMaster - Help Center
            </span>
          </div>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about using VideoMaster
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-12 animate-fade-in-up animation-delay-200">
            <div className="flex items-center border-2 border-purple-500 rounded-full overflow-hidden bg-black/20 focus-within:ring-2 focus-within:ring-purple-400">
              <input
                type="text"
                placeholder="Search for help..."
                className="flex-1 bg-transparent border-0 py-3 px-6 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 px-6 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-300">
            <Card
              className={`${theme === "dark" ? "bg-purple-800/50 border-purple-700" : "bg-white/70 border-purple-200"} backdrop-blur-md shadow-xl hover:bg-purple-800/70 transition-colors cursor-pointer`}
            >
              <CardContent className="p-6 text-center">
                <Youtube className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-bold mb-2">YouTube Downloads</h3>
                <p
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  Complete guide to downloading videos from YouTube in highest
                  quality
                </p>
              </CardContent>
            </Card>

            <Card
              className={`${theme === "dark" ? "bg-purple-800/50 border-purple-700" : "bg-white/70 border-purple-200"} backdrop-blur-md shadow-xl hover:bg-purple-800/70 transition-colors cursor-pointer`}
            >
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">
                  Social Media Downloads
                </h3>
                <p
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  How to download videos from Instagram, TikTok, and Twitter
                </p>
              </CardContent>
            </Card>

            <Card
              className={`${theme === "dark" ? "bg-purple-800/50 border-purple-700" : "bg-white/70 border-purple-200"} backdrop-blur-md shadow-xl hover:bg-purple-800/70 transition-colors cursor-pointer`}
            >
              <CardContent className="p-6 text-center">
                <FileVideo className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2">
                  Video Format Conversion
                </h3>
                <p
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  Guide to converting videos between different formats easily
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              className={`${theme === "dark" ? "bg-purple-800/30 border-purple-700" : "bg-white/70 border-purple-200"} backdrop-blur-md border rounded-lg overflow-hidden`}
            >
              <AccordionItem
                value="item-1"
                className={`${theme === "dark" ? "border-b border-purple-700/50" : "border-b border-purple-200/50"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-800/50">
                  How do I download a video from YouTube?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 py-4 ${theme === "dark" ? "bg-purple-900/30 text-gray-300" : "bg-purple-50/50 text-gray-700"}`}
                >
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Copy the video URL from YouTube</li>
                    <li>Paste the URL in the input field on our homepage</li>
                    <li>Select your desired video quality</li>
                    <li>Select your preferred file format</li>
                    <li>Click the "Download Video" button</li>
                    <li>Wait for the download process to complete</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className={`${theme === "dark" ? "border-b border-purple-700/50" : "border-b border-purple-200/50"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-800/50">
                  What is the maximum quality I can download videos in?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 py-4 ${theme === "dark" ? "bg-purple-900/30 text-gray-300" : "bg-purple-50/50 text-gray-700"}`}
                >
                  You can download videos in quality up to 4K (2160p) if the
                  original video is available in that quality. We support all
                  quality levels available on the original platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className={`${theme === "dark" ? "border-b border-purple-700/50" : "border-b border-purple-200/50"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-800/50">
                  Can I download entire playlists from YouTube?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 py-4 ${theme === "dark" ? "bg-purple-900/30 text-gray-300" : "bg-purple-50/50 text-gray-700"}`}
                >
                  Yes, you can download entire playlists from YouTube. Simply
                  copy the playlist URL and paste it in the URL field, then
                  select the "Download Playlist" option that will appear.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className={`${theme === "dark" ? "border-b border-purple-700/50" : "border-b border-purple-200/50"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-800/50">
                  Can I download only the audio from a video?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 py-4 ${theme === "dark" ? "bg-purple-900/30 text-gray-300" : "bg-purple-50/50 text-gray-700"}`}
                >
                  Yes, you can download just the audio from any video. Select
                  MP3 or AAC from the "File Format" dropdown and only the audio
                  will be downloaded without the video.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className={`${theme === "dark" ? "border-b border-purple-700/50" : "border-b border-purple-200/50"}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-800/50">
                  Is the service completely free?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 py-4 ${theme === "dark" ? "bg-purple-900/30 text-gray-300" : "bg-purple-50/50 text-gray-700"}`}
                >
                  Yes, VideoMaster is completely free for all users. You can
                  download videos in any quality and any format without any
                  cost. We rely on minimal ads to support and maintain the
                  service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Documentation */}
          <div className="mb-12 animate-fade-in-up animation-delay-500">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Documentation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <BookOpen className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">User Guide</h3>
                      <p
                        className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}
                      >
                        Comprehensive guide to all features and options
                        available in VideoMaster
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl overflow-hidden transition-colors duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <Info className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Troubleshooting
                      </h3>
                      <p
                        className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}
                      >
                        Solutions to common issues and problems you might
                        encounter
                      </p>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        View Solutions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold mb-4">
              Couldn't find what you're looking for?
            </h2>
            <p
              className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-6`}
            >
              Our support team is ready to answer all your questions
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`${theme === "dark" ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"} backdrop-blur-sm border-t py-8 mt-16 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <HelpCircle className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">VideoMaster</span>
            </div>
            <div className="flex gap-6">
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500">
            <p>© 2025 VideoMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Help;
