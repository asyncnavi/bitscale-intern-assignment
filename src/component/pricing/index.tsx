import { useState, Fragment } from "react";
import Switch from "../switch";
import pricingCards from "../../data/pricing-data";
import PricingCard from "./card";

const PricingSection = () => {
  const [activeOption, setActiveOption] = useState<"Monthly" | "Annual">(
    "Monthly",
  );

  const handleToggle = (option: "Monthly" | "Annual") => {
    setActiveOption(option);
  };

  return (
    <Fragment>
      <div className="mx-auto flex justify-center mt-5">
        <Switch activeOption={activeOption} onToggle={handleToggle} />
      </div>

      <div className="w-full max-w-[1280px] mx-auto min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center p-10">
        {pricingCards.map((card) => (
          <PricingCard key={card.id} {...card} />
        ))}
      </div>
    </Fragment>
  );
};

export default PricingSection;
