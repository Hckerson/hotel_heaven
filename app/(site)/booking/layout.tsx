import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bookings",
};
export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
