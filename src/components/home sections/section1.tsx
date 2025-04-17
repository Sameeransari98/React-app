import { FC, useRef, useEffect } from "react";
import ThemeButton from "../ThemeButton";

const Section2: FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={sectionRef}>
      <div className="bg-back-img py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-6 col-sm-6">
              <img src="/src/images/react1.jpg" alt="" width="100%" />
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-sm-6">
              <h2 className="text-start">Lorem ipsum dolor sit amet</h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="col-12 text-start">
                <ThemeButton btnText={"Read More"} btnRadious={5} />
              </div>
            </div>
          </div>
          <div className="row three-cols mt-5">
            <div className="col-4 text-center">
              <div className="featured-box">
                <i
                  className="fa-solid fa-tree"
                  style={{ fontSize: "2rem" }}
                ></i>
                <h4 className="mt-3">Feature 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-4 text-center">
              <div className="featured-box">
                <i
                  className="fa-solid fa-tree"
                  style={{ fontSize: "2rem" }}
                ></i>
                <h4 className="mt-3">Feature 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-4 text-center">
              <div className="featured-box">
                <i
                  className="fa-solid fa-tree"
                  style={{ fontSize: "2rem" }}
                ></i>
                <h4 className="mt-3">Feature 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
