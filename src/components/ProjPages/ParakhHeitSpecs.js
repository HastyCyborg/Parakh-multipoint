import React from "react";
import './ParakhHeitSpecs.css'
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
}));

function ParakhHeitSpecs() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Prop</TableCell>
            <TableCell className={classes.tableHeaderCell}>Specs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Structure</TableCell>
            <TableCell>R.C.C. Framed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Walls</TableCell>
            <TableCell>Brick Masonary (Ghol Brick)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Flooring</TableCell>
            <TableCell>Virtified Tiles</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Toilet</TableCell>
            <TableCell>
              Glazed Tiles upto 7ft. with matching ceramic wares and C.P.
              fittings, geyser power point in toilet
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Kitchen</TableCell>
            <TableCell>
              Polished Granite Stone Platforms, Stainless Steel Sink Glazed
              Tiles dado upto 2ft. from platform
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Door</TableCell>
            <TableCell>
              Flush Doors with Dewas Sec. frames, attrative laminated finish
              main door
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Windows</TableCell>
            <TableCell>
              Powder Coated aluminum section, sliding windows with fixes M.S.
              Grill
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Water Supply</TableCell>
            <TableCell>
              U.P.V.C. Water lines with Adequate water supply through common
              Tube well and overhead water tanks
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Electrification</TableCell>
            <TableCell>
              Concealed copper wiring with modular switches and Power Points
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Painting</TableCell>
            <TableCell>
              External Walls finished with weather proof acylic paint and
              Internal Walls with Emeltion
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>P.O.P</TableCell>
            <TableCell>
              Cornice and Beading in Drawing, Dining and Bedroom
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ParakhHeitSpecs;
