"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Home,
  User,
  FolderKanban,
  Briefcase,
  Mail,
  Linkedin,
} from "lucide-react";
import imageProfile from "../public/profileImage.jpg";

const sections = ["home", "about", "projects", "experience", "contact"];

const icons: Record<string, any> = {
  home: Home,
  about: User,
  projects: FolderKanban,
  experience: Briefcase,
  contact: Mail,
};

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: 0 };
        return { id, offset: el.getBoundingClientRect().top };
      });

      const current = offsets.reduce((prev, curr) =>
        Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
      );
      setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen w-60 bg-gray-900 text-gray-300 shadow-xl flex flex-col items-center p-6">
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mt-4">
        <Image
          src={imageProfile}
          alt="Zainab Yousaf"
          width={140}
          height={140}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="font-bold text-2xl text-white text-center mt-4">
        Zainab Yousaf
      </h1>

      {/* Social Links just below the name */}
      <div className="flex gap-6 mt-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/zainabyousaf/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        >
          <Linkedin size={28} />
        </a>
        {/* Email */}
        <a
          href="mailto:zainab.yousaf161@gmail.com"
          title="Email"
          className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        >
          <Mail size={28} />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-6 mt-10 w-full text-left text-lg">
        {sections.map((sec) => {
          const Icon = icons[sec];
          return (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`flex items-center gap-3 transition-colors ${
                  active === sec
                    ? "text-blue-400 font-semibold"
                    : "hover:text-white"
                }`}
              >
                <Icon size={22} />
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
