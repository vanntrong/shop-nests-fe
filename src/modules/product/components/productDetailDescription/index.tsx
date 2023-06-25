import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

interface IProductDetailDescriptionProps {
  content: string;
}

const ProductDetailDescription: FC<IProductDetailDescriptionProps> = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default ProductDetailDescription;
