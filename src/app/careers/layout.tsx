import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career opportunities with Norfolk Patient Transport for patient-focused transportation professionals.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

