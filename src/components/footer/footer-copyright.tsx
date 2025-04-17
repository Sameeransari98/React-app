import React from "react";

const FooterCopyright: React.FC = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Nature Brand. All rights reserved.
      </p>
    </div>
  );
};

export default FooterCopyright;
