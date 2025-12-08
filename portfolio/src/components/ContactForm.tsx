"use client";

import { useState } from "react";
// TS first validation library
import { z } from "zod";

//backwardssunrisestudios@gmail.com
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents the default action from this event from occurring
    e.preventDefault();

    if (loading) return;

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
      // await sendContactMessage in an actions server side thing
      setSuccessMessage("Yay");
    } catch (err) {
      throw new Error(`Contact Form Error: ${err}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border-2 border-purple-500 rounded-md bg-white flex flex-col gap-4 w-1/2 p-8 items-start"
    >
      <label className="flex flex-col w-full">
        <span className="p-1">Name</span>
        <input
          type="text"
          name="name"
          required
          className="p-4 border-black border-2 text-2xl w-full"
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="p-1">Email</span>
        <input
          type="email"
          name="email"
          required
          className="p-4 border-black border-2 text-2xl w-full"
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="p-1">Subject</span>
        <input
          type="subject"
          name="subject"
          required
          className="p-4 border-black border-2 text-2xl w-full"
        />
      </label>

      <label className="flex flex-col w-full">
        <span className="p-1">Message</span>
        <textarea
          name="message"
          required
          className="p-4 border-black border-2 text-2xl w-full min-h-64"
        />
      </label>

      <button
        type="submit"
        className={`bg-black text-white py-4 px-8 text-xl border w-auto disable:opacity-50 ${
          loading ? "cursor-progress" : "cursor-pointer"
        }`}
      >
        {loading ? "Sending Message..." : "Send Message"}
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
