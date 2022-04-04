import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchList = (props) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search User" variant="outlined" />
      </Box>
      {props.usersData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Street: {item.address.street}</Typography>
            <Typography>Suite: {item.address.suite}</Typography>
            <Typography>City: {item.address.city}</Typography>
            <Typography>Zipcode: {item.address.zipcode}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SearchList;
