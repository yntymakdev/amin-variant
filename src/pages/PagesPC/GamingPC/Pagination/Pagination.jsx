import React from "react";
import prev from "../../../../assets/images/prev_icon/icon-pagin.svg";
import prev2 from "../../../../assets/images/prev_icon/icon_prev2.svg";
import next from "../../../../assets/images/next_icon.svg";
import next2 from "../../../../assets/images/prev_icon/next_icon/Vector.svg";

const Paginations = ({
  countriesPerPage,
  totalCountries,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  console.log("lol", pageNumber);
  return (
    <ul
      className="paginationss"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <button
        style={{
          width: "40px",
          height: "40px",
          border: "2px solid rgb(44,56,73)",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          console.log(currentPage);
          if (currentPage > 1) {
            prevPage();
          }
          window.scroll({ top: "700" });
        }}
      >
        {currentPage === 1 ? (
          <>
            <img src={prev2} alt="" />
          </>
        ) : (
          <>
            <img src={prev} alt="" />
          </>
        )}
      </button>
      {pageNumber.map((number) => (
        <li className="page-item" key={number}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "2px solid rgb(44,56,73)",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="page-link"
            onClick={() => {
              paginate(number);
              window.scroll({ top: "700" });
            }}
          >
            {number}
          </div>
        </li>
      ))}
      <button
        style={{
          width: "40px",
          height: "40px",
          border: "2px solid rgb(44,56,73)",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          if (pageNumber.length > currentPage) {
            nextPage();
          }
          window.scroll({ top: "700" });
        }}
      >
        {currentPage === pageNumber.length ? (
          <>
            <img src={next2} alt="" />
          </>
        ) : (
          <>
            <img src={next} alt="" />
          </>
        )}
      </button>
    </ul>
  );
};

export default Paginations;
