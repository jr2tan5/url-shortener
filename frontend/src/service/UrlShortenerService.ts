import { Form } from "../form";

const createUrlEntry = async (form: Form) => {
  const response = await fetch("http://localhost:5000/api/v1/world", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form }),
  });
  const data = await response.json();
};

export const UrlShortenerService = {
  createUrlEntry,
};
