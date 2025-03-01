import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, ArrowLeft } from "lucide-react";
import { useTheme } from "./theme-provider";

const Terms = () => {
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
            <FileText className="h-6 w-6 text-teal-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              VideoMaster - Terms of Service
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Last Updated: June 15, 2025
            </p>
          </div>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                These Terms of Service constitute a legally binding agreement
                made between you and VideoMaster concerning your access to and
                use of our website and services. By accessing or using our
                services, you agree to be bound by these Terms. If you disagree
                with any part of the terms, you may not access the service.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                VideoMaster and its original content, features, and
                functionality are and will remain the exclusive property of
                VideoMaster and its licensors. Our service is protected by
                copyright, trademark, and other laws of both the United States
                and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior
                written consent of VideoMaster.
              </p>
              <p className="mt-4">
                VideoMaster does not claim ownership of the videos you download
                through our service. You are solely responsible for ensuring
                that you have the right to download and use any content accessed
                through our service.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>By using our service, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You will only download content for which you have the legal
                  right to do so
                </li>
                <li>You will not use our service for any illegal purposes</li>
                <li>
                  You will not attempt to bypass any technological measures
                  implemented to protect content
                </li>
                <li>
                  You will not use our service to infringe on the intellectual
                  property rights of others
                </li>
                <li>
                  You will not distribute downloaded content in a manner that
                  violates applicable laws
                </li>
                <li>
                  You will not use our service to download content that is
                  obscene, defamatory, or otherwise objectionable
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Disclaimer of Warranties
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                Your use of our service is at your sole risk. The service is
                provided on an "AS IS" and "AS AVAILABLE" basis. The service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
              <p className="mt-4">
                VideoMaster, its subsidiaries, affiliates, and licensors do not
                warrant that a) the service will function uninterrupted, secure,
                or available at any particular time or location; b) any errors
                or defects will be corrected; c) the service is free of viruses
                or other harmful components; or d) the results of using the
                service will meet your requirements.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                In no event shall VideoMaster, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                service; (ii) any conduct or content of any third party on the
                service; (iii) any content obtained from the service; and (iv)
                unauthorized access, use, or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence), or any other legal theory, whether or not we have
                been informed of the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70 border-gray-200"} backdrop-blur-md shadow-xl mb-8 animate-fade-in-up animation-delay-200`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}
            >
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p className="mt-4">
                By continuing to access or use our service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the
                service.
              </p>
              <p className="mt-4">
                If you have any questions about these Terms, please contact us
                at intermaxmohamed@gmail.com.
              </p>
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
              <FileText className="h-6 w-6 text-teal-400" />
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

export default Terms;
