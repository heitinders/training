import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UserList = (props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.listItems?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.first_name}</TableCell>
                <TableCell align="right">{item.last_name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">
                  <img src={item.avatar}></img>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    <Button
                      component={Link}
                      to={`/users/${item.id}`}
                      variant="outlined"
                      color="success"
                    >
                      EDIT
                    </Button>
                    <Button variant="contained" color="error">
                      DELETE
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
