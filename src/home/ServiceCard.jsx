import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex-1 flex-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={icon} alt={`${title} icon`} className="object-contain shrink-0 mt-1 aspect-square w-[97px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-neutral-800 max-md:mt-10">
            <h2 className="self-start text-4xl font-bold leading-none">{title}</h2>
            <p className="mt-5 text-base font-medium leading-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;