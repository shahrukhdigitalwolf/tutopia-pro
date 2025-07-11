"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { reviewData } from "@/app/data/review";
import CourseReview from "./CourseReview";
import CloseIcon from "@mui/icons-material/Close";

export default function CourseReviewPopup() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen("paper")}
        sx={{
          textTransform: "capitalize",
          color: "black",
          bgcolor: "white",
          py: "1",
          px: "20px",
          lineHeight: "1",
        }}
      >
        Show All Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ backdropFilter: "blur(2px)" }}
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent
          dividers={scroll === "paper"}
          sx={{ bgcolor: "#1a1a1a" }}
        >
          <div className="flex flex-wrap gap-y-5 mt-5">
            {reviewData
              .slice()
              .reverse()
              .map((ele, i) => {
                return (
                  <div key={i} className="w-full px-1.5">
                    <CourseReview name={ele.userName} review={ele.review} />
                  </div>
                );
              })}
          </div>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#272727" }}>
          <Button
            onClick={handleClose}
            sx={{ color: "black", bgcolor: "white", lineHeight: "1" }}
          >
            Close <CloseIcon fontSize="small" />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
