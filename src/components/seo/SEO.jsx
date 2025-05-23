// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Helmet>
  );
};

export default SEO;
