
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import {
  MoveToInbox as MoveToInboxIcon,
  Star as StarIcon,
  Send as SendIcon,
  Drafts as DraftsIcon,
  ArrowDropUp,
  ArrowDownward,
  ArrowDropDown,
} from "@mui/icons-material";
import { useState } from "react";
const App = () => {
  const sidebarIconStyle = { color: "disabled" };
  const values = [3, 456, "i"];
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = () => setIsOpen(!isOpen);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            style={{
              height: "auto",
              backgroundImage:
                "url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                alt="sidebar"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  margin: "40px 0px",
                }}
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg"
              />
              <Box
                onClick={handleItemClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "50px",
                  alignItems: "center",
                  padding: "0px 5px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: isOpen ? "black" : "",
                    fontWeight: isOpen ? "bold" : "normal",
                  }}
                >
                  john.doe@gmail.com
                </Typography>
                {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Box>
            </Box>
          </MenuItem>
          {isOpen && (
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#D3D3D3",
                margin: "4px 0px",
              }}
            >
              <ListItem>Profile</ListItem>
              <ListItem>Settings</ListItem>
              <ListItem>Help</ListItem>
              <ListItem>Exit</ListItem>
            </Box>
          )}
          <MenuItem icon={<MoveToInboxIcon style={sidebarIconStyle} />}>
            Inbox
          </MenuItem>
          <MenuItem icon={<StarIcon style={sidebarIconStyle} />}>
            Starred
          </MenuItem>
          <MenuItem icon={<SendIcon style={sidebarIconStyle} />}>
            Sent Mail
          </MenuItem>
          <MenuItem icon={<DraftsIcon style={sidebarIconStyle} />}>
            Drafts
          </MenuItem>
          <Divider />
          <SubMenu label="All Mails" sx={{ backgroundColor: "#D3D3D3" }}>
            <MenuItem>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Social</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "grey",
                    fontSize: "10px",
                    color: "white",
                  }}
                >
                  12
                </Box>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Promo</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "grey",
                    fontSize: "10px",
                    color: "white",
                  }}
                >
                  0
                </Box>
              </Box>
            </MenuItem>
          </SubMenu>
          {["Trash", "Spam", "Follow Up"].map((label, index) => (
            <MenuItem key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">{label}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "grey",
                    fontSize: "10px",
                    color: "white",
                  }}
                >
                  {values[index]}
                </Box>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};
export default App;