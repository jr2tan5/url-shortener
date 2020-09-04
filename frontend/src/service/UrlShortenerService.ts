import { Form } from "../model/form";
import { UrlUtil } from "../common/util/UrlUtil";

const createUrlEntry = async (form: Form): Promise<string> => {
  const response = await fetch(UrlUtil.toEndpointRoute("submit"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form }),
  });
  const data = await response.json();
  return data.shortenedUrl;
};

export const UrlShortenerService = {
  createUrlEntry,
};
