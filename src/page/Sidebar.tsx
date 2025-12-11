import menuIcon from "../images/menu.png";
import closeIcon from "../images/close.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Sidebar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(".sidebar", {
      right: 0,
      duration: 0.5,
    });

    tl.from(".sidebar li", {
      x: 150,
      duration: 0.4,
      stagger: 0.2,
      opacity: 0,
    });

    tl.from(".btn-close", {
      opacity: 0,
    });

    const megaMenu = document.querySelector(".megaMenu");
    const closeMegaMenu = document.querySelector(".btn-close");

    const handleClick = () => {
      tl.play();
    };

    megaMenu?.addEventListener("click", handleClick);

    closeMegaMenu?.addEventListener("click", function () {
      tl.reverse();
    });

    // Cleanup function
    return () => {
      megaMenu?.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className="main_sidebar">
      <div>RADICALLOOP TEC</div>
      <div className="relative">
        <button className="cursor-pointer w-full text-right megaMenu">
          <img
            src={menuIcon}
            alt="menu-icon"
            className="ml-auto w-[48px] h-[48px]"
          />
        </button>
        <div className="sidebar">
          <button className="bg-red-300 absolute top-[2%] right-[5%] cursor-pointer p-2 rounded-full btn-close z-10">
            <img
              src={closeIcon}
              alt="close-icon"
              className="w-6 h-6 cursor-pointer "
            />
          </button>
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Service </li>
            <li>Content US </li>
            <li>Service </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
