import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { useTheme } from "./theme-provider";

const Privacy = () => {
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
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              VideoMaster - Privacy Policy
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Last Updated: June 15, 2025
            </p>
          </div>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Introduction</CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                At VideoMaster, we respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you visit our website or use our video downloading services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site or use our services.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <p>
                We may collect personal identification information from users in
                various ways, including, but not limited to, when users visit
                our site, register on the site, subscribe to the newsletter, and
                in connection with other activities, services, features, or
                resources we make available on our site. Users may be asked for,
                as appropriate, name and email address.
              </p>

              <h3 className="text-xl font-semibold mt-6">Non-Personal Data</h3>
              <p>
                We may collect non-personal identification information about
                users whenever they interact with our site. Non-personal
                identification information may include the browser name, the
                type of computer, and technical information about users' means
                of connection to our site, such as the operating system and the
                Internet service providers utilized and other similar
                information.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                We may use the information we collect from you for the following
                purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>
                  To allow you to participate in interactive features of our
                  service when you choose to do so
                </li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information so that we can
                  improve our service
                </li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                We implement appropriate technical and organizational measures
                to maintain the safety of your personal data. However, please
                also remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect
                your personal data, we cannot guarantee its absolute security.
                Any information you transfer to us is done so at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                Our service may contain links to other sites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By email: intermaxmohamed@gmail.com</li>
                <li>By visiting the contact page on our website</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`${theme === "dark" ? "bg-black/50 border-gray-800" : "bg-white/50 border-gray-200"} backdrop-blur-sm border-t py-8 mt-16 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-400" />
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

export default Privacy;
