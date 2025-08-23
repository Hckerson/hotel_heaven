import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hotel Serena Heaven",
  description:
    "Learn about Hotel Serena Heaven — our story, values, and the team dedicated to delivering exceptional hospitality in Newark.",
  openGraph: {
    title: "About | Hotel Serena Heaven",
    description:
      "Discover the story and team behind Hotel Serena Heaven and our commitment to world-class service.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Thelo Dashboard",
//     default: "Dashboard | Thelo",
//   },
//   description:
//     "Manage your celebrations, wishlists, and account settings on Thelo.",
//   openGraph: {
//     title: {
//       template: "%s | Thelo Dashboard",
//       default: "Dashboard | Thelo",
//     },
//     description:
//       "Manage your celebrations, wishlists, and account settings on Thelo.",
//   },
// };
