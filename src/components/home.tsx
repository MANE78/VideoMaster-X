import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Download,
  Loader2,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Play,
  Settings,
  Shield,
  Video,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useTheme } from "./theme-provider";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [platform, setPlatform] = useState("youtube");
  const [quality, setQuality] = useState("720p");
  const [format, setFormat] = useState("mp4");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Simulate download process
    setTimeout(() => {
      if (!url) {
        setError("Please enter a valid URL");
        setLoading(false);
        return;
      }

      // Create actual download link
      const link = document.createElement("a");
      link.href = `https://example.com/download?url=${encodeURIComponent(url)}&platform=${platform}&quality=${quality}&format=${format}`;
      link.setAttribute("download", `video.${format}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      setLoading(false);
    }, 1500);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="h-5 w-5 text-red-500" />;
      case "instagram":
        return <Instagram className="h-5 w-5 text-pink-500" />;
      case "tiktok":
        return <Video className="h-5 w-5 text-black" />;
      case "twitter":
        return <Twitter className="h-5 w-5 text-blue-400" />;
      case "facebook":
        return <Facebook className="h-5 w-5 text-blue-600" />;
      default:
        return <Download className="h-5 w-5" />;
    }
  };

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white" : "bg-gradient-to-b from-purple-50 via-indigo-100 to-purple-100 text-gray-900"}`}
    >
      {/* Header */}
      <header
        className={`${theme === "dark" ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"} backdrop-blur-sm border-b sticky top-0 z-10 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Download className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              VideoMaster
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex hover:bg-purple-800/30"
              onClick={() => (window.location.href = "/privacy")}
            >
              <Shield className="mr-2 h-4 w-4 text-purple-400" />
              Privacy
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex hover:bg-purple-800/30"
              onClick={() => (window.location.href = "/help")}
            >
              <Settings className="mr-2 h-4 w-4 text-purple-400" />
              Help
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} border-0`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Download Videos from Any Site
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-pulse-slow">
              Advanced tool for downloading high-quality videos from YouTube,
              Instagram, TikTok, Twitter, Facebook, and 100+ other sites
            </p>
          </div>

          {/* Download Card */}
          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-2xl rounded-xl overflow-hidden transition-colors duration-300 animate-fade-in-up animation-delay-200`}
          >
            <CardContent className="p-8">
              <Tabs defaultValue="download" className="mb-8">
                <TabsList
                  className={`grid grid-cols-2 mb-8 ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-200/50"}`}
                >
                  <TabsTrigger
                    value="download"
                    className="data-[state=active]:bg-purple-600"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Video
                  </TabsTrigger>
                  <TabsTrigger
                    value="convert"
                    className="data-[state=active]:bg-indigo-600"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Convert Format
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="download" className="space-y-6">
                  <form onSubmit={handleDownload} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Select value={platform} onValueChange={setPlatform}>
                          <SelectTrigger
                            className={`w-[180px] ${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`}
                          >
                            <SelectValue placeholder="Select Platform" />
                          </SelectTrigger>
                          <SelectContent
                            className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                          >
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                            <SelectItem value="twitter">Twitter</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="other">Other Sites</SelectItem>
                          </SelectContent>
                        </Select>

                        <Input
                          type="text"
                          placeholder="Paste video URL here"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className={`flex-1 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}`}
                        />
                      </div>
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Video Quality
                        </label>
                        <Select value={quality} onValueChange={setQuality}>
                          <SelectTrigger
                            className={`w-full ${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`}
                          >
                            <SelectValue placeholder="Select Quality" />
                          </SelectTrigger>
                          <SelectContent
                            className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                          >
                            <SelectItem value="1080p">1080p (HD)</SelectItem>
                            <SelectItem value="720p">720p (HD)</SelectItem>
                            <SelectItem value="480p">480p (SD)</SelectItem>
                            <SelectItem value="360p">360p (SD)</SelectItem>
                            <SelectItem value="240p">240p (Low)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          File Format
                        </label>
                        <Select value={format} onValueChange={setFormat}>
                          <SelectTrigger
                            className={`w-full ${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`}
                          >
                            <SelectValue placeholder="Select Format" />
                          </SelectTrigger>
                          <SelectContent
                            className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                          >
                            <SelectItem value="mp4">MP4</SelectItem>
                            <SelectItem value="mkv">MKV</SelectItem>
                            <SelectItem value="avi">AVI</SelectItem>
                            <SelectItem value="mov">MOV</SelectItem>
                            <SelectItem value="mp3">
                              MP3 (Audio Only)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      disabled={loading || !url}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          {getPlatformIcon(platform)}
                          <span className="mx-2">Download Video</span>
                          <Download className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="convert" className="space-y-6">
                  <div className="text-center p-8">
                    <h3 className="text-xl font-bold mb-2">
                      Convert Video Format
                    </h3>
                    <p className="text-gray-400">
                      Upload your video to convert it to another format
                    </p>
                    <Button className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      Upload File
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              {success && (
                <div
                  className={`mt-6 p-6 ${theme === "dark" ? "bg-green-900/30 border-green-700" : "bg-green-100/70 border-green-300"} border rounded-lg text-center animate-pulse`}
                >
                  <p className="text-green-400 text-lg mb-3">
                    Download started!
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    If download doesn't start automatically, click the button
                    below
                  </p>
                  <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Download className="mr-2 h-4 w-4" />
                    Direct Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
            <div
              className={`${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"} backdrop-blur-sm p-6 rounded-xl border transition-colors duration-300`}
            >
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Download</h3>
              <p className="text-gray-400">
                High-speed servers ensure maximum download speeds for all your
                videos
              </p>
            </div>

            <div
              className={`${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"} backdrop-blur-sm p-6 rounded-xl border transition-colors duration-300`}
            >
              <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Secure</h3>
              <p className="text-gray-400">
                We don't store any videos or personal information, your privacy
                is fully protected
              </p>
            </div>

            <div
              className={`${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"} backdrop-blur-sm p-6 rounded-xl border transition-colors duration-300`}
            >
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Options</h3>
              <p className="text-gray-400">
                Full control over video quality and format with support for over
                100 websites
              </p>
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold mb-8">Supported Platforms</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <Youtube className="h-12 w-12 text-red-500 mb-2" />
                <span>YouTube</span>
              </div>
              <div className="flex flex-col items-center">
                <Instagram className="h-12 w-12 text-pink-500 mb-2" />
                <span>Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <Video className="h-12 w-12 text-black mb-2" />
                <span>TikTok</span>
              </div>
              <div className="flex flex-col items-center">
                <Twitter className="h-12 w-12 text-blue-400 mb-2" />
                <span>Twitter</span>
              </div>
              <div className="flex flex-col items-center">
                <Facebook className="h-12 w-12 text-blue-600 mb-2" />
                <span>Facebook</span>
              </div>
            </div>
          </div>

          {/* Free Service Banner */}
          <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
            <div
              className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl rounded-xl border p-8 max-w-4xl mx-auto`}
            >
              <div className="flex flex-col items-center">
                <Sparkles className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  100% Free Service
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
                  VideoMaster is completely free to use. No registration
                  required, no hidden fees, no limitations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-800/50">
                    <span className="text-3xl font-bold text-purple-400">
                      ∞
                    </span>
                    <span className="mt-2">Unlimited Downloads</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-800/50">
                    <span className="text-3xl font-bold text-purple-400">
                      HD
                    </span>
                    <span className="mt-2">High Quality</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-800/50">
                    <span className="text-3xl font-bold text-purple-400">
                      24/7
                    </span>
                    <span className="mt-2">Always Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Stats */}
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
      </main>

      {/* Footer */}
      <footer
        className={`${theme === "dark" ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"} backdrop-blur-sm border-t py-8 mt-16 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Download className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">VideoMaster</span>
            </div>
            <div className="flex gap-6">
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
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
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

export default Home;
