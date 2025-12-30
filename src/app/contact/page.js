import React from "react";
import { forms, seo, about } from "@/data/data";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: `Contact Me | ${seo.title}`,
  description:
    "Get in touch with me to discuss projects, collaborations, or just to say hello.",
  keywords:
    "contact, get in touch, collaboration, email, message, web developer",
};

function Contact() {
  return (
    <>
      <div className="md:w-[700px] w-[100%] mt-5 p-4">
        <main className="flex flex-col gap-2">
          <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
            Contact Me
          </h1>
          <div className="p-1">
            {/* Contact form only — phone and CV links removed per request */}

            <ContactForm
              formspreeUrl={forms.formspreeUrl}
              toEmail={about.email}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Contact;
