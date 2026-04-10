import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Transport",
  description:
    "Book non-emergency medical transportation in Norfolk and Haldimand County.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}

