export interface PricingCard {
  id: string;
  title: string;
  price: string;
  bestFor?: string;
  discountedPrice?: string;
  discountOff?: string;
  features: string[];
  cta: string;
  additionalText: string[];
}

const pricingCards: PricingCard[] = [
  {
    id: "trial-1a2b3c",
    title: "Trial",
    price: "Try now",
    bestFor: "Get personalized template",
    features: [
      "25+ data sources",
      "GPT4, Linkedin and others",
      "Access to slack community",
      "10+ templates to scale your outbound",
    ],
    cta: "Try Now",
    additionalText: ["Explore product capabilities"],
  },
  {
    id: "growth-4d5e6f",
    title: "Growth",
    price: "$229/month",
    discountedPrice: "$459",
    discountOff: "50%",
    features: [
      "8,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
    ],
    cta: "Continue with Growth",
    additionalText: [
      "Unlimited leads search",
      "Fully enriched 5000 leads",
      "Personalized outreach at scale",
    ],
  },
  {
    id: "booster-7g8h9i",
    title: "Booster",
    price: "$499/month",
    discountedPrice: "$999",
    discountOff: "50%",
    features: [
      "25,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Advanced models like Claude Sonnet",
      "Dedicated 8 hours from Bitscale expert",
      "2-way Hubspot integration",
    ],
    cta: "Continue with Booster",
    additionalText: [
      "Unlimited leads search",
      "Fully enriched 15000 leads",
      "Personalized outreach at scale",
    ],
  },
  {
    id: "enterprise-0j1k2l",
    title: "Enterprise",
    price: "Contact Us",
    bestFor: "For individual pricing",
    features: [
      "Data privacy certification",
      "Priority Support",
      "Dedicated Bitscale expert",
      "Private Slack Channel",
      "Collaborative workspace and templates",
    ],
    cta: "Try Now",
    additionalText: [
      "Perfect for High-Volume End-to-End CRM Data Enrichment",
      "Unlimited list of leads with unlimited data points",
    ],
  },
];

export default pricingCards;
