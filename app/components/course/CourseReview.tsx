import { Avatar, Rating } from "@mui/material";
import React from "react";

interface reviewProps {
  name: string;
  review: string;
}

function CourseReview({ name, review }: reviewProps) {
  const newname = name
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <div>
      <div className="flex gap-x-3 items-center mb-3">
        <div>
          <Avatar
            sx={{
              bgcolor: "white",
              color: "black",
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {newname}
          </Avatar>
        </div>
        <div>
          <h4 className="text-white text-[16px] font-bold capitalize">{name}</h4>
          <div className="flex items-center gap-x-2">
            <Rating
              name="read-only"
              defaultValue={5}
              precision={0.5}
              size="small"
              readOnly
            />
            <span className="text-gray-500 text-[13px]">a week ago</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white">{review}</p>
      </div>
    </div>
  );
}

export default CourseReview;
