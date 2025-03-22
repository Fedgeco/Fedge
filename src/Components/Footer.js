import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Consulting", path: "#" },
        { name: "Development", path: "#" },
        { name: "Support", path: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "#" },
        { name: "Documentation", path: "#" },
        { name: "FAQs", path: "/home" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter size={20} />, path: "https://twitter.com" },
    { icon: <FaLinkedin size={20} />, path: "https://linkedin.com" },
    { icon: <FaFacebook size={20} />, path: "https://facebook.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-gray-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; 2025 Fedge. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.path} className="text-gray-400 hover:text-white">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
