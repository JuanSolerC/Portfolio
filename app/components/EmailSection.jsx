import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    
    return (
      <section id="contact" className="grid my-8 md:my-5 py-10 gap-4 relative text-center border-2 border-primary-500 rounded-2xl">
        <div className="z-10 mx-auto max-w-2xl md:max-w-none md:items-center px-6 md:px-6"> 
          <h5 className="text-3xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md lg:text-lg">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2 justify-center">
            <Link href="https://www.linkedin.com/in/juansolerc/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://github.com/JuanSolerC">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default EmailSection;