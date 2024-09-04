"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import styles from "./contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // O ID do serviço
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // O ID do template
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string // O user ID
      );
      setStatus("Message sent successfully!");
      console.log(result.text);
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className={styles.contact}>
      <PageTitle
        title="Get in Touch"
        subTitle="Interested in collaborating or have any questions? Let’s connect and explore possibilities."
      />
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.contactInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.contactInput}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.contactTextarea}
        />
        <button type="submit" className={styles.contactButton}>
          Send Message
        </button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </section>
  );
}
