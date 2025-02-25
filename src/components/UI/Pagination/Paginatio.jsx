import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Paginatio = ({ totalPages, page, changePages }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePages(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginatio;
