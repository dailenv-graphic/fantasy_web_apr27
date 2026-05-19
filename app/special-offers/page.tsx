import type { Metadata } from "next";
import { SpecialOffersContent } from "@/components/special-offers/special-offers-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Special Offers | FantasyWorld Resort",
  description:
    "Exclusive FantasyWorld Resort rates for military, first responders, Florida residents, theme park pass holders, AAA, rewards members, and more.",
};

export default function SpecialOffersPage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full min-w-0 bg-[#f5f4f0]">
        <SpecialOffersContent />
      </main>
      <SiteFooter />
    </>
  );
}
