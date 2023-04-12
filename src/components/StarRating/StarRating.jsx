import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
function StarRating(props) {
 const [value,setValue] = useState(0)
 const [hover, setHover] = React.useState(-1);
  return (
    <Rating
      name="hover-feedback"
      value={value}
      precision={0.5}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      emptyIcon={<StarIcon  fontSize="inherit" />}
    />
  );
}

export default StarRating;
