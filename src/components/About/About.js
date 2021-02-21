import React from "react";

function About() {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="pt-10">
      <div className="flex justify-center">
        <p className=" text-gray-500 text-3xl font-bold p-3 ">About Me</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col max-w-md border-4 ml-5 mr-5 p-3 justify-between">
          <span>Karl-Johan Westhoff</span>
          <span>Age: {getAge("12 12 1975")}</span>
          <span>
            {getAge("01 01 2000")} year work experience with real engineering
          </span>
          <span>
            Aspiring web developer with a burning desire to digitalize processes
          </span>
          <span>Loves to go family camping in beautiful USA </span>
          
        </div>
        <img
          className="border-4"
          src={process.env.PUBLIC_URL+"./images/selfie.jpeg"}
          width="200"
          alt = "selfie of me"
        ></img>
        <div className="border-4 ml-5 mr-5 p-3 max-w-md">
          Moved to California from Denmark with my family in March 2020 just
          before the world went sideways. Currently working part time and remote
          on my 'old' job as subsea engieer in the offshore oil and gas
          industry. Software development has always been part of my proffesional
          life building stand alone tools, scrips and a lot of spread sheets
        </div>
      </div>
    </div>
  );
}

export default About;
