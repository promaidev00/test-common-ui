import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  Header,
  HeaderRightLogo,
  LogoutIcon,
  PROMAILogo,
  PersonalInfoIcon,
  ProjectLogo,
  Breadcrumb,
} from "@promaidev00/common-libraries";

const Test = () => {
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
