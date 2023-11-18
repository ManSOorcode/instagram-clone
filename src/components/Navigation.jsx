import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-slate-100 w-full fixed flex justify-between top-0">
      <div className="logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="logo of instagram"
          className="w-24 mt-2 ml-4 lg:w-32"
        />
      </div>

      <div>
        <img
          src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
          alt="person-signIn"
          className="w-12 mt-2 mr-3 lg:mt-2 lg:w-16  rounded-full bg-white"
        />
      </div>
    </nav>
  );
};

export default Navigation;
