"use client";

import { useState } from "react";
// TS first validation library
import { z } from "zod";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

//backwardssunrisestudios@gmail.com
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents the default action from this event from occurring
    e.preventDefault();
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
    } catch (err) {
      throw new Error(`Contact Form Error: ${err}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="subject" name="subject" required />
      <textarea name="message" required />

      <button type="submit" disabled={!isCaptchaVerified}>
        Send Message
      </button>
    </form>
  );
}
