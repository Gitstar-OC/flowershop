"use client";

import { useState } from "react";
import { toast } from "sonner";

const inputClass = "w-full h-12 rounded-[10px] border-none input";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Successfully subscribed to the newsletter!", {
          className: `${inputClass} !bg-[#0088ff] !text-white`,
        });
        setEmail("");
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-3">
      <p className="input-label">Subscribe to our Newsletter</p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 w-full rounded border border-[#DDD] px-3 text-[13px] focus:outline-none focus:border-[#111]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-9 rounded bg-[#E6F0FF] px-3 text-[12px] text-[#2563EB] hover:bg-[#DCE9FF] disabled:opacity-50"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
