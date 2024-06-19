import * as React from "react";
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UserSettings from "./components/UserSettings";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "rgba(25, 77, 132, 1)",
  color: theme.palette.secondary.main,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "rgba(25, 77, 132, 1)",
  color: theme.palette.secondary.main,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { getUser } = useAuth();

  const userRole = getUser().role;

  // Obtener el array de opciones según el rol del usuario
  const userOptions = options[userRole];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: open ? "flex-end" : "center" }}>
          {open ? (
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <UserSettings /> {/* Contenido que deseas centrar */}
          </ListItem>
          {userOptions.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={
                  text === "Usuarios"
                    ? "register"
                    : text === "Registro"
                    ? ""
                    : text === "Tabla"
                    ? "table"
                    : ""
                }
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: "white",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {text === "Usuarios" ? (
                    <PeopleIcon />
                  ) : text === "Registro" ? (
                    <AssignmentIcon />
                  ) : (
                    <TableChartIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          color: "white",
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
    </ThemeProvider>
  );
}

const options = {
  admin: ["Usuarios", "Registro", "Tabla"],
  editor: ["Registro", "Tabla"],
  registrador: ["Registro"],
};
