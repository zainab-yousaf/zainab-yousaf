// components/Contact.tsx
import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-10">
          I’m always open to discussing new projects, opportunities, or
          collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:zainab.yousaf161@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition font-medium"
          >
            <Mail className="w-5 h-5" />
            zainab.yousaf161@gmail.com
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-800 rounded-xl shadow font-medium">
            <MapPin className="w-5 h-5 text-red-500" />
            Lahore, Pakistan
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Lahore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.051190161907!2d74.3344889!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c33d37f93f%3A0x84bb61b1b845a70!2sLahore!5e0!3m2!1sen!2s!4v1694100000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
