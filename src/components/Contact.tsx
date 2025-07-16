import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Send, Instagram, FileText, ExternalLink } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-md4bjab4.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I'm always excited to connect with new people and discuss opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Form Button */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Click the button below to fill out a contact form and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdHWMOmB3gaf8KUe-JMzhoEJNuIxWAVJt4nmMkMPBHmarhCYQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Let's connect</CardTitle>
                <CardDescription>
                  You can also reach me through these platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Connect With Me</h4>
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/seeyeon-stephanie-oh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors mb-2">
                        <Linkedin className="text-blue-700" size={20} />
                      </div>
                      <span className="text-sm text-gray-600">LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/soh2970" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors mb-2">
                        <Github className="text-blue-700" size={20} />
                      </div>
                      <span className="text-sm text-gray-600">GitHub</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/_steph.oh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors mb-2">
                        <Instagram className="text-blue-700" size={20} />
                      </div>
                      <span className="text-sm text-gray-600">Instagram</span>
                    </a>
                    <button 
                      onClick={handleResumeDownload}
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors mb-2">
                        <FileText className="text-blue-700" size={20} />
                      </div>
                      <span className="text-sm text-gray-600">Resume</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
