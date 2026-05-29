"use client";
import { useState } from "react";
// TS first validation library
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setSuccessMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      contactFormSchema.parse(values);
    } catch (err) {
      setSuccessMessage(`Error In Contact Form: ${(err as Error).message}`);
      setLoading(false);
      throw new Error(`Contact Form Error: ${err}`);
    }

    formData.append("access_key", "4089fd0c-84aa-4882-8ae0-98e7eeac2318");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setSuccessMessage(data.success ? "Success!" : "Error");
      setLoading(false);
      (document.getElementById("contact-form1") as HTMLFormElement).reset();
    } catch (err) {
      setSuccessMessage("Error Sending Email! Please Try Again!");
      setLoading(false);
      throw new Error(`Email Sending Error: ${err}`);
    }
  };

  return (
    <form
      id="contact-form1"
      onSubmit={handleSubmit}
      className="text-white p-8 w-full"
    >
      <label className="flex flex-col w-full">
        <span className="p-1 text-xl">Name</span>
        <input
          type="text"
          name="name"
          required
          className="p-4 font-serif border-2 border-transparent border-b-white hover:border-white focus:border-white text-xl w-full h-1/2"
        />
      </label>
      <div className="sm:flex sm:flex-row sm:gap-3 mt-3">
        <label className="flex flex-col w-full sm:w-1/2">
          <span className="p-1 text-xl">Email</span>
          <input
            type="email"
            name="email"
            required
            className="p-4 font-serif border-2 border-transparent border-b-white hover:border-white focus:border-white text-xl w-full h-1/2"
          />
        </label>
        <label className="flex flex-col w-full sm:w-1/2">
          <span className="p-1 text-xl">Subject</span>
          <input
            type="subject"
            name="subject"
            required
            className="p-4 font-serif border-2 border-transparent border-b-white hover:border-white focus:border-white text-xl w-full h-1/2"
          />
        </label>
      </div>
      <label className="flex flex-col w-full">
        <span className="p-1 text-xl">Message</span>
        <textarea
          name="message"
          required
          className="p-4 font-serif border-2 border-transparent border-b-white hover:border-white focus:border-white text-xl w-full min-h-32"
        />
      </label>
      <button
        type="submit"
        className={`bg-black mt-4 text-white py-4 px-8 text-xl border w-auto disable:opacity-50 ${
          loading ? "cursor-progress" : "cursor-pointer"
        }`}
      >
        {loading ? "Sending Message..." : "Send Message"}
      </button>
      {successMessage && <p className="text-white text-xl">{successMessage}</p>}
    </form>
  );
}
