import React from "react";

function LegalAssociateInfo() {
  return (
    <div className="flex flex-col justify-center gap-16 items-center mx-auto h-full max-w-7xl pb-20">
      {/* note */}
      <div className="bg-gradient-to-r from-primary to-cyan-600 text-white flex p-6 rounded-lg gap-4 rounded-bl-3xl rounded-tr-3xl">
        {/* icon */}
        <div>
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_412_677)">
              <path
                d="M23.5 3.91699C12.69 3.91699 3.91669 12.6903 3.91669 23.5003C3.91669 34.3103 12.69 43.0837 23.5 43.0837C34.31 43.0837 43.0834 34.3103 43.0834 23.5003C43.0834 12.6903 34.31 3.91699 23.5 3.91699ZM23.5 33.292C22.4229 33.292 21.5417 32.4107 21.5417 31.3337V23.5003C21.5417 22.4232 22.4229 21.542 23.5 21.542C24.5771 21.542 25.4584 22.4232 25.4584 23.5003V31.3337C25.4584 32.4107 24.5771 33.292 23.5 33.292ZM25.4584 17.6253H21.5417V13.7087H25.4584V17.6253Z"
                fill="#F4F5F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_412_677">
                <rect width="47" height="47" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-lg">
          <p>What’s more?</p>
          <p>FREE Legal Training</p>
          <p>*You can also customize the services you require; </p>
          <p>
            *Mix your necessities with our finance, tax, business, and research
            services.
          </p>
          <p> (*) means T&C is required</p>
        </div>
      </div>
    </div>
  );
}

export default LegalAssociateInfo;
