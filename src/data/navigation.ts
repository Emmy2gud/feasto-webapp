export type NavLink = {
  label: string;
  to: string;
};

export const primaryNav: NavLink[] = [
  { label: "Browse vendors", to: "/vendors" },
  { label: "For business", to: "/about-vendors" },
  { label: "For riders", to: "/about-rider" },
];

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Order",
    links: [
      { label: "Browse vendors", to: "/vendors" },
      { label: "Categories", to: "/#categories" },
      { label: "Checkout", to: "/checkout" },
      { label: "Track an order", to: "/tracking" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Sell on Feasto", to: "/about-vendors" },
      { label: "Deliver with Feasto", to: "/about-rider" },
      { label: "Vendor dashboard", to: "/dashboard" },
      { label: "Rider dashboard", to: "/rider/dashboard" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", to: "/login" },
      { label: "Create account", to: "/signup" },
      { label: "Your profile", to: "/profile" },
      { label: "Account settings", to: "/settings" },
    ],
  },
];
