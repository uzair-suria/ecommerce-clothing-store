import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
