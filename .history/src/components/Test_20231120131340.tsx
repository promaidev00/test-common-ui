import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  PlusIcon,
  FolderIcon,
  HeaderRightLogo,
  LanguageIcon,
  LogoutIcon,
  PROMAILogo,
  PersonalInfoIcon,
  ProjectLogo,
} from "src/components/Shared/ui/Icon";
import { ProjectSelection } from "src/components/Shared/ui/ProjectSelection";
import RobotArmImage from "../assets/robotic_arm.png";
import { Header } from "src/components/Shared/ui/Header";
import { Breadcrumb } from "src/components/Shared/ui/Breadcrumb";

const Test = () => {
  const projectSelectTheme = {
    default: "white",
    textSecondary: "#004",
    disabled: "#ee4",
    icons: "#607d8b",
  };

  const projects = [
    {
      name: "Project 1",
      projectImage: RobotArmImage,
      id: "68896c68-9f9b-5d57-b7e4-a62ea1f2e591",
    },
    {
      name: "Project 2",
      projectImage: RobotArmImage,
      id: "68896c68-9f9b-5d57-b7e4-a62ea1f2e591",
    },
  ];

  const selected = {
    name: "new project",
    projectImage: RobotArmImage,
    id: "68896c68-9f9b-5d57-b7e4-a62ea1f2e591",
  };

  const handleItemClick = (item: any) => {
    console.log("Selected item:", item);
  };

  const MenuItemList = [
    {
      id: "personal_information",
      name: "Personal Information",
      icon: <PersonalInfoIcon />,
      haschildren: false,
      childList: [],
    },
    {
      id: "logout",
      name: "Logout",
      icon: <LogoutIcon />,
      haschildren: false,
      childList: [],
    },
  ];

  const handleSelected = (e: any) => {
    console.log("Handle selected menu item:", e);
  };

  return (
    <Box
      sx={{
        maxWidth: "1368px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h1"
        sx={{ width: "100%", textAlign: "center", paddingY: 5 }}
      >
        PLAYGROUND FOR RESUABLE COMPONENTS
      </Typography>

      <Stack
        direction="column"
        gap={4}
        sx={{
          width: "100%",
          paddingY: 5,
          background: "#EEE",
        }}
      >
        <Stack direction="column" gap={1} paddingX={2}>
          <Box>
            <Typography variant="h3">Project Selection</Typography>
          </Box>
          <ProjectSelection
            list={projects}
            selected={selected}
            selectedIcon={selected?.id ? <FolderIcon /> : ""}
            leftIcon={<FolderIcon />}
            addProjectIcon={<PlusIcon />}
            theme={projectSelectTheme}
            handleItemClick={handleItemClick}
          />
        </Stack>

        <Stack direction="column" gap={1} paddingX={2}>
          <Box>
            <Typography variant="h3">Header</Typography>
          </Box>
          <Header
            className="header"
            style={{
              background: "blue",
            }}
            leftLogo={<ProjectLogo />}
            rightLogo={<HeaderRightLogo />}
            promAiLogo={<PROMAILogo />}
            listHead="My Profile"
            name="Dummy Name"
            role="Dummy Role"
            isAuthenticated
            menuList={MenuItemList}
            handleSelected={handleSelected}
          >
            <Stack direction="row" gap={1}>
              <Paper sx={{ padding: 2, width: "250px" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              ></Box>
            </Stack>
          </Header>
        </Stack>

        <Stack direction="column" gap={1} paddingX={2}>
          <Box>
            <Typography variant="h3">Breadcrumb</Typography>
          </Box>
          <Breadcrumb
            data={{
              name: "Surgical Arm",
              sheets: [
                {
                  id: 1,
                  catalogNumber: "Main IPCI 12345678901211",
                  image: "",
                },
                {
                  id: 2,
                  catalogNumber: "Surgical Arm dg1i",
                  image: "",
                },
                {
                  id: 3,
                  catalogNumber: "MAZOR_RAMI, MZA_889380323820",
                  image: "",
                },
              ],
            }}
            loading={false}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Test;
