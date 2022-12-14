import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function TextComponent() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        background: "#000",
      }}
    >
      <IconButton sx={{ p: "10px", color: "#FFF" }} aria-label="menu">
        <AccountCircleOutlinedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#FFF" }}
        placeholder="Type your nick name..."
        inputProps={{ "aria-label": "Type your nick name..." }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
