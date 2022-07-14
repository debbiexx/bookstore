// import logo from "./logo.svg";
 import "../App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
 import Appbar from "../components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../components/banner";
 import Products from "../components/products";
 import { UIProvider } from "../context/ui";
 import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
 import Promotions from "../components/promotions";
import SearchBox from "../components/search";

export default function Home () {
    return (
      <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#DEF2F1",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
