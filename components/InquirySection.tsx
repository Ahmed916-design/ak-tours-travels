// components/InquirySection.tsx
import { MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import InquiryForm from "./InquiryForm";

export default function InquirySection({
  title = "Get an Instant Quote",
  subtitle = "Fill the form below — we'll send you a quote on WhatsApp within minutes",
  defaultCar = "",
  defaultRoute = "",
  bg = "bg-green-50",
}: {
  title?: string;
  subtitle?: string;
  defaultCar?: string;
  defaultRoute?: string;
  bg?: string;
}) {
  return (
    <section className={`section ${bg}`} id="inquiry">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          eyebrow="Send Inquiry"
          title={title}
          subtitle={subtitle}
        />

        <div className="mt-10 card !p-6 md:!p-8">
          <InquiryForm defaultCar={defaultCar} defaultRoute={defaultRoute} />
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Prefer direct contact?{" "}
          <a
            href="https://wa.me/919979357086?text=Hi%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-green-700 hover:underline"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}