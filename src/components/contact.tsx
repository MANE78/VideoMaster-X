import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send, Loader2, ArrowLeft } from "lucide-react";
import { useTheme } from "./theme-provider";

const Contact = () => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real application, you would send the form data to your backend
    // For now, we'll simulate a form submission
    setTimeout(() => {
      // Here you would typically send an email to intermaxmohamed@gmail.com
      console.log("Sending email to: intermaxmohamed@gmail.com");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

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
            <Mail className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              VideoMaster - Contact Us
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
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to answer your questions and help you anytime
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card
                className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400">intermaxmohamed@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-400">+994 40 665 67 38</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-400">London, United Kingdom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-gray-400">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-gray-400">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card
                className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl h-full`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {success ? (
                    <div className="p-6 bg-green-900/30 border border-green-700 rounded-lg text-center">
                      <p className="text-green-400 text-lg mb-3">
                        Your message has been sent successfully!
                      </p>
                      <p className="text-gray-300">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} min-h-[150px]`}
                            placeholder="Write your message here..."
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 animate-fade-in-up animation-delay-400">
            <Card
              className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl overflow-hidden`}
            >
              <div className="aspect-video w-full bg-gray-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-400">London, United Kingdom</p>
                </div>
              </div>
            </Card>
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
              <Mail className="h-6 w-6 text-purple-500" />
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

export default Contact;
