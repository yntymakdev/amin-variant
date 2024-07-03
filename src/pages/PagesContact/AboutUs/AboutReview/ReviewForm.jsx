import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

const ReviewForm = ({ userId }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const reviewApi = "http://16.171.26.64/review/";
  console.log("userId", userId);
  const handleSubmits = async (e) => {
    e.preventDefault();
    const token = JSON.stringify(Cookies.get("authToken"));
    console.log(token);
    const userReview = {
      comment: "",
      rating: 4,
      user: 61,
    };

    try {
      const res = await axios.post(reviewApi, userReview, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(res.data);
      setReview("");
      setRating(null);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div className="df">
      <div className="textarea-container">
        {/* <i className="fas fa-pencil-alt textarea-icon"></i> */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="inpModal"
          color="blue"
          placeholder="Расскажите нам о своем опыте..."
        />
        <br />
        <div className="btn-review">
          <button onClick={handleSubmits}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default ReviewForm;
