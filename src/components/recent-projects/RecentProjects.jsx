import { Rating } from "@mui/material";
import "./RecentProjects.scss";

export default function RecentProjects({
  image,
  title,
  description,
  rating,
  ratingNumber,
}) {
  return (
    <div className="project-item">
      <div className="image-project">
        <img src={image} alt="" />
      </div>
      <div className="title-project">
        <p>{title}</p>
      </div>
      <div className="description-project">
        <p>{description}</p>
      </div>
      <div className="rating-project">
        <Rating name="read-only" value={rating} readOnly precision={0.1} />
        <p>{ratingNumber}</p>
      </div>
    </div>
  );
}
