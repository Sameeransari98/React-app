import React, { FC } from "react";

interface ThemeButtonProps {
  btnText: string;
  btnRadious: string | number;
  backgroundColor?: string;
}

const ThemeButton: FC<ThemeButtonProps> = (props) => {
  const { btnText, btnRadious, backgroundColor } = props;

  return (
    <>
      <button
        style={{
          backgroundColor: `${backgroundColor ? backgroundColor : ""}`,
          color: "#ffffff",
          borderRadius: btnRadious,
          border: "0px",
          outline: "none",
        }}
        className="btn btn-secondary"
      >
        {btnText}
      </button>
    </>
  );
};

export default ThemeButton;
