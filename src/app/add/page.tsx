"use client";
import React, { useState } from "react";
import axios from "axios";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import styles from "./add.module.scss";

export default function UploadProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mainImage: "",
    images: "",
    link: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const imagesArray = formData.images.split(",").map((img) => img.trim());

    try {
      const response = await axios.post(
        "https://portfolio-api-production-93c5.up.railway.app/graphql",
        {
          query: `
          mutation {
            createProject(createProjectInput: {
              name: "${formData.name}",
              description: "${formData.description}",
              mainImage: "${formData.mainImage}",
              images: ${JSON.stringify(imagesArray)},
              link: "${formData.link}"
            }) {
              id
              name
            }
          }
        `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStatus("Project uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading project:", error);
      setStatus("Failed to upload project.");
    }
  };

  return (
    <section className={styles.upload}>
      <PageTitle
        title="Upload a New Project"
        subTitle="Add a new project to your portfolio by filling out the form below."
      />
      <form className={styles.uploadForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.uploadInput}
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className={styles.uploadTextarea}
        />
        <input
          type="text"
          name="mainImage"
          placeholder="Main Image URL"
          value={formData.mainImage}
          onChange={handleChange}
          className={styles.uploadInput}
        />
        <input
          type="text"
          name="images"
          placeholder="Images (Comma separated URLs)"
          value={formData.images}
          onChange={handleChange}
          className={styles.uploadInput}
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={formData.link}
          onChange={handleChange}
          className={styles.uploadInput}
        />
        <button type="submit" className={styles.uploadButton}>
          Upload Project
        </button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </section>
  );
}
