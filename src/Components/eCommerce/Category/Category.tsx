import { Link } from "react-router-dom";
import styles from "./style.module.css";
const { category, categoryImg, categoryTitle } = styles;
import { TCategory } from "@customTypes/Category";

const Category = ({title, prefix, img}: TCategory) => {
  return (
    <div className={category}>
      <Link to={`products/${prefix}`}>
      <div className={categoryImg}>
        <img
          src={img}
          alt=""
          />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
          </Link>
    </div>
  );
};

export default Category;