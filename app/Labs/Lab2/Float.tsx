import React from "react";

const Float = () => {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        <div className="wd-float-done"></div>
      </div>
      <div>
        <img
          className="wd-float-left"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        potenti. Nunc quam justo, tincidunt quis pretium at, lacinia ut massa.
        Ut cursus, lacus non rhoncus ultricies, turpis odio ullamcorper erat, a
        eleifend massa nisi sed ex.
        <img
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        potenti. Nunc quam justo, tincidunt quis pretium at, lacinia ut massa.
        Ut cursus, lacus non rhoncus ultricies, turpis odio ullamcorper erat, a
        eleifend massa nisi sed ex.
        <div className="wd-float-done"></div>
      </div>
    </div>
  );
};

export default Float;
