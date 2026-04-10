import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Norfolk Patient Transport for dispatch, booking support, or facility onboarding.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

