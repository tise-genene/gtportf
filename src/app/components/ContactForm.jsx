"use client";

import { useMemo, useState } from "react";

function isValidFormspreeUrl(url) {
  if (typeof url !== "string") return false;
  // Formspree endpoints look like: https://formspree.io/f/abcdefg
  return /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(url.trim());
}

export default function ContactForm({ formspreeUrl, toEmail }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const canUseFormspree = useMemo(
    () => isValidFormspreeUrl(formspreeUrl),
    [formspreeUrl]
  );

  const reset = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) return;

    setStatus("sending");

    if (canUseFormspree) {
      try {
        const fd = new FormData();
        fd.set("name", fullName);
        fd.set("email", email);
        fd.set("message", message);

        const res = await fetch(formspreeUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: fd,
        });

        if (!res.ok) throw new Error("Formspree submission failed");

        setStatus("sent");
        reset();
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // Fallback: open the user’s email client.
    const subject = `Portfolio contact from ${fullName}`;
    const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${encodeURIComponent(
      toEmail || ""
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("idle");
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div>
        <div>
          <span className="uppercase text-sm text-base-content/80 font-bold">
            Full Name
          </span>
          <input
            className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
            type="text"
            name="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <span className="uppercase text-sm text-base-content/80 font-bold">
            Email
          </span>
          <input
            className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <span className="uppercase text-sm text-base-content/80 font-bold">
            Message
          </span>
          <textarea
            className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-sm mt-2 text-base-content/70">Message sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm mt-2 text-base-content/70">
              Couldn’t send via Formspree. Please try again or email me
              directly.
            </p>
          )}
          {!canUseFormspree && (
            <p className="text-sm mt-2 text-base-content/60">
              This form will open your email client to send the message.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
