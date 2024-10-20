import { Check, XCircle } from "react-feather";
import clsx from "clsx";
import { PricingCard as PricingCardProps } from "../../data/pricing-data";

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  bestFor,
  discountOff,
  discountedPrice,
  features,
  additionalText,
  cta,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col w-[280px] p-4 border rounded-md space-y-10 relative",
        title === "Booster" ? "booster-card" : "bg-white",
      )}
    >
      {/* Pricing header */}
      <div className={clsx("space-y-4", title === "Booster" && "text-white")}>
        <h4 className="flex justify-between">
          {title}
          {title === "Booster" && (
            <span>
              <div className="text-xs bg-green-100 w-max p-1 rounded-full text-green-800 flex gap-1 items-center">
                Popular
              </div>
            </span>
          )}
        </h4>
        <h2 className="text-3xl font-bold">{price}</h2>
        <p className="text-gray-500 text-sm">{bestFor}</p>
        {discountOff && (
          <div className="flex gap-4 items-center">
            <div className="text-xs bg-green-100 w-max p-1 rounded-full text-green-800 flex gap-1 items-center">
              <XCircle size={14} />
              {discountOff} off
            </div>
            <h1 className="text-2xl font-bold text-gray-500 line-through">
              {discountedPrice}
            </h1>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="flex-grow">
        <ul>
          {features.map((text) => (
            <li key={text} className="flex items-start gap-3 mb-5">
              <div
                className={clsx(
                  "flex-shrink-0 w-4 h-4 bg-gray-900 text-white rounded-full flex items-center justify-center",
                  title === "Booster" && "text-gray-900 bg-white",
                )}
              >
                <Check
                  size={8}
                  color={title === "Booster" ? "#111827" : "white"}
                />
              </div>
              <p
                className={clsx(
                  "text-sm",
                  title === "Booster" ? "text-white" : "text-gray-500",
                )}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional info */}
      <div className="border-t border-t-blue-400 min-h-[190px] flex flex-col">
        <div className="flex-grow">
          <ul className="list-disc mt-5 pl-5">
            {additionalText.map((text) => (
              <li
                key={text}
                className={clsx(
                  "mb-5 font-semibold text-sm text-gray-500",
                  title === "Booster" && "text-white",
                )}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <button className="text-white bg-blue-500 py-3 w-full rounded text-xs font-semibold">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
