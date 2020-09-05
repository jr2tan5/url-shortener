import { Form } from "../model/form";
import { UrlUtil } from "../common/util/UrlUtil";
import { StatusCodes } from "http-status-codes";

const createUrlEntry = async (form: Form): Promise<string> => {
  const response = await fetch(UrlUtil.toEndpointRoute("submit"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form }),
  });
  const data = await response.json();
  if (response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
    alert(data);
    return "";
  }
  return data.shortenedUrl;
};

export const UrlShortenerService = {
  createUrlEntry,
};
