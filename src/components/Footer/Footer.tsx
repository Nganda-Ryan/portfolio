import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center mt-10 h-auto py-10 px-5 md:px-10 bg-gray-900 text-gray-400">
      {/* Contact Links */}
      <div className="flex space-x-5 mb-6 md:mb-0">
        {/* Email */}
        <a
          href="mailto:steveloicnganda@gmail.com"
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/email-icon.svg"
            alt="Email Icon"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/+237690924753"
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp-icon.svg"
            alt="WhatsApp Icon"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/steve-loic/"
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn Icon"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Nganda-Ryan"
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-icon.svg"
            alt="GitHub Icon"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm md:text-base">
        <p className="text-gray-500">
          Designed & Built by Steve Loïc NGANDA ONANA
        </p>
        <p className="mt-1 text-gray-600">© 2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
