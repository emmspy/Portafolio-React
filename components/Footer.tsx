import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer-colum">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="felxStart footer">
      <div className="flex felx-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo.png" width={50} height={43} alt="logo" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            praesentium molestiae veniam. Illo animi totam quisquam atque culpa
            incidunt officiis optio in? Voluptatum accusamus magnam mollitia est
            quidem nulla error?
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {/* componenete de constante en constants/index.ts */}
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gab-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
