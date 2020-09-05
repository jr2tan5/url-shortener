require("dotenv").config({
  path:
    process.env.NODE_ENV.trim() === "development"
      ? `.env.${process.env.NODE_ENV.trim()}`
      : `.env`,
});
