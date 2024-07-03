import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutReview = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  //ynty

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.request({
  //       method: "POST",
  //       url: "http://13.53.171.221/review/",
  //       data : {
  //         value
  //       }
  //     });

  //     onReviewSubmit();
  //     setRating(0);
  //     setComment("");
  //     setError(null);
  //   } catch (error) {
  //     setError(error.message);
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  const read = async () => {
    const res = await axios.get("http://13.53.171.221/review/");
    console.log(
      res,
      "resflkjrweflkhjrwelkhbglkrhnewlkjglkrwejt vrjhigwlhreithriweohi"
    );
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AboutReview;
