import React from "react";

const HeaderPage = ({ img, title, description }) => {
  return (
    <div
      className="w-full h-[300px] md:h-[350px] bg-center bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full h-full bg-[rgb(0,0,0)]/[0.7]">
        <div className="w-full h-full max-w-[1200px] mx-auto p-8 md:p-10 flex flex-col justify-center">
          <h1 className="py-8 text-2xl md:text-5xl font-semibold text-slate-100 tracking-wide">
            {title}
          </h1>
          <h4
            dangerouslySetInnerHTML={{ __html: description }}
            className="md:text-xl font-semibold text-slate-300 tracking-wide italic"
          ></h4>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
