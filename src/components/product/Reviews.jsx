import React from "react";
import ProductStore from "../../store/ProductStore";
import StarRatings from "react-star-ratings";

function Reviews() {
  const { ReviewList } = ProductStore();
  return (
    <ul class="list-group mt-4 list-group-flush">
      {ReviewList !== null ? (
        ReviewList.map((item, i) => {
          return (
            <li key={i} class="list-group-item bg-transparent">
              <h6 className="p-0 m-0"><i class="bi bi-person"></i>{item["profile"]["cus_name"]}</h6>
              <StarRatings
                rating={parseFloat(item["rating"])}
                starRatedColor="red"
                starDimension="15px"
                starSpacing="2px"
              />
              <p>{item['des']}</p>
            </li>
          );
        })
      ) : (
        <span></span>
      )}
    </ul>
  );
}

export default Reviews;
