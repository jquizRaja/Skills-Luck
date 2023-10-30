import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle, AiFillGoogleCircle, AiFillAmazonCircle, AiFillAppstore} from "react-icons/ai"

const Footer = () => {
  return (
    <footer
      className="bg-slate-600
    text-slate-200
    text-sm 
    mt-16
    "
    >
      <Container>
        <div
          className="
        flex
        flex-col
        md:flex-row
        justify-between
        pt-16
        pb-8 
        "
        >
          <FooterList>
            <h3
              className="
             text-base
             font-bold
             mb-2
            "
            >
              Shop Categories
            </h3>
            <Link href="#">Labtop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Iphones</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Mobile</Link>
            <Link href="#">Reacharge</Link>
          </FooterList>
          <FooterList>
            <h3
              className="
             text-base
             font-bold
             mb-2
            "
            >
              Customer Services
            </h3>
            <Link href="#">Labtop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Iphones</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Mobile</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div
            className="
           w-full
           md:w-1/3
           mb-6
           md:mb-0
          "
          >
            <h3
              className="
             text-base
             font-bold
             mb-2
            "
            >
              About Us
            </h3>
            <p className="mb-2">
              This is an open source project found on github (requires developer
              experience to set up and configure). This website provides a
              little extra functionality to allow users to easily register and
              manage their own data sets. It helps fund the open source project,
              so thanks for signing up!
            </p>
            <p>
              &copy;{new Date().getFullYear()} Skill🏆|🤞Luck. All Rights
              Reserved
            </p>
          </div>

          <FooterList>
            <h3
              className="
             text-base
             font-bold
             mb-2
            "
            >
              Follow Us
            </h3>
            <div className="
            flex
            gap-2
            ">
              <Link href='#'>
                <MdFacebook size={24}/>
              </Link>
              <Link href='#'>
                <AiFillTwitterCircle size={24}/>
              </Link>
              <Link href='#'>
                <AiFillAppstore size={24}/>
              </Link>
              <Link href='#'>
                <AiFillAmazonCircle size={24}/>
              </Link>
              <Link href='#'>
                <AiFillGoogleCircle size={24}/>
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
