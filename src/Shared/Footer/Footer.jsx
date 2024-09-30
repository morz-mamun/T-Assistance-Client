import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1B4242]">
      <div className="p-10 max-w-screen-2xl mx-auto">
        <div className="flex md:flex-row justify-around mb-5">
          <nav className="">
            <div>
              <header className="footer-title">Services</header>
            </div>
            <div className="flex flex-col">
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
          </nav>
          <nav className="">
            <div>
              <header className="footer-title">Company</header>
            </div>
            <div className="flex flex-col">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
          </nav>
          <div className="hidden md:block">
            <header className="footer-title">Social</header>
            <div className="flex gap-10">
              <a
                className=""
                href="https://www.linkedin.com/in/md-morshed-alam-2324022a4/"
              >
                <FaLinkedin className="text-3xl hover:text-warning"></FaLinkedin>
              </a>
              <a className="" href="https://www.facebook.com/">
                <FaFacebookSquare className="text-3xl hover:text-warning"></FaFacebookSquare>
              </a>
              <a className="" href="https://github.com/morz-mamun">
                <FaGithub className="text-3xl hover:text-warning"></FaGithub>
              </a>
            </div>
          </div>
        </div>
        <nav className="flex justify-center items-center md:hidden">
          <div>
            <div className="flex justify-center items-center">
              <header className="footer-title">Social</header>
            </div>
            <div className="flex gap-10">
              <a
                className=""
                href="https://www.linkedin.com/in/md-morshed-alam-2324022a4/"
              >
                <FaLinkedin className="text-3xl hover:text-warning"></FaLinkedin>
              </a>
              <a className="" href="https://www.facebook.com/">
                <FaFacebookSquare className="text-3xl hover:text-warning"></FaFacebookSquare>
              </a>
              <a className="" href="https://github.com/morz-mamun">
                <FaGithub className="text-3xl hover:text-warning"></FaGithub>
              </a>
            </div>
          </div>
        </nav>
        <p className="text-center mt-5">
          Copyright © 2023 - All right reserved by
        </p>
      </div>
    </footer>
  );
};

export default Footer;
