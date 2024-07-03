import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  boxShadow: 24,
  p: 4,
};

export default function GamingModal({ handleClose, open }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        style={{
          pointerEvents: "none",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span
            onClick={handleClose}
            style={{
              position: "absolute",
              zIndex: 1,
              right: "5%",
              top: 0,
              rotate: "45deg",
              fontSize: "30px",
              color: "#8490A4",
              cursor: "pointer",
              pointerEvents: "all",
            }}
          >
            +
          </span>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Результат
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Товар успешно добавлен в корзину
          </Typography>
          <Box
            sx={{
              padding: "20px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                color: "#171520",
                fontWeight: "600",
                fontSize: "10px",
                background: "#49DCFF",
                transition: "0.6s",
                "&:hover": {
                  background: "#164652",
                },
              }}
              variant="contained"
            >
              В КОРЗИНУ
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                width: "100%",
                color: "#171520",
                fontWeight: "600",
                fontSize: "10px",
                background: "#49DCFF",
                transition: "0.6s",
                "&:hover": {
                  background: "#164652",
                },
              }}
              variant="contained"
            >
              ЗАКРЫТЬ ОКНО
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
