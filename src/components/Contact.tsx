import React, { useState } from "react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = ({ data }) => {
  const contactData = data;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! I'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: contactData.socialLinks?.github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: contactData.socialLinks?.linkedIn,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: contactData.socialLinks?.twitter,
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}

          {/* Right Column - Contact Info & Social */}
          {/* <div className="space-y-8"> */}
          {/* Contact Information */}
          <div className="bg-gray-900 rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Contact Info
              </h3>
            </div>

            <div className="space-y-4">
              {contactData.email ? (
                <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center p-4 bg-gray-800 rounded-lg opacity-50">
                  <Mail className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-500 italic">
                      Add email to portfolio.json
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                <MapPin className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Available Globally</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900 rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Connect</h3>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social) => (
                <div key={social.name}>
                  {social.url ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current mr-3 transition-colors" />
                      <div className="flex-1">
                        <p className="text-white group-hover:text-current transition-colors">
                          {social.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Connect on {social.name}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-current transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center p-4 bg-gray-800 rounded-lg opacity-50">
                      <social.icon className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-gray-500">{social.name}</p>
                        <p className="text-gray-500 text-sm italic">
                          Add {social.name.toLowerCase()} to portfolio.json
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* </div> */}
        </div>

        {/* Quick Response Promise */}
        <div className=" mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-center">
          <h4 className="text-xl font-semibold text-white mb-2">
            Let's Build Something Great
          </h4>
          <p className="text-blue-100">
            I'm always excited to work on new projects and collaborate with
            talented people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
