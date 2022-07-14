import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
 import { IconButton } from "@mui/material";
// import { useUIContext } from "../../context/ui";

 export default function AppbarMobile({ matches }) {
//   const { setDrawerOpen, setShowSearchBox } = useUIContext();
 return(
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
      D &#38; D
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
