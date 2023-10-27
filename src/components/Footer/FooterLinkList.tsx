const FooterLinkList = ({ title, links }) => {
  return (
    <div>
      <h5 className="font-semibold text-white mb-5">{title}</h5>

      <ul className="flex flex-col gap-3.5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "nofollow noopenner" : ""}
              className="font-medium ease-in duration-300 hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
