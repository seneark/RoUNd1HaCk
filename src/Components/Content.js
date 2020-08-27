import React from "react";
import InputField from "./InputField";
import { useMediaQuery } from "react-responsive";
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	})
)(TableCell);

const StyledTableRow = withStyles((theme: "Theme") =>
	createStyles({
		root: {
			backgroundColor: "#272c34",
			color: "white",
		},
	})
)(TableRow);

function createData(name: string, calories: string) {
	return { name, calories };
}

const rows = [
	createData("2zsds44@dfa", "FreEdonia"),
	createData("4aerdfsg4343#$err44", "fREedONia"),
];

const useStyles = makeStyles({
	table: {
		minWidth: 100,
	},
});

const Content = () => {
	const classes = useStyles();

	const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div
			className="Content"
			style={{
				width: isPortrait ? "90%" : "70%",
			}}
		>
			<h1>Find Binod's Country</h1>
			<p>
				The mysterious guy BINOD has been abducted, we know nothing
				about his location. Terrorists took him into secret hiding and
				thus he is missing. But they left a clue about which country
				they fled to.<br/> The clue says : <br />
				We are all the same. All the same. Longing to find our way back.
				Back to the one. Back to the only one!
			</p>
			
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Sample Input</StyledTableCell>
							<StyledTableCell>Sample Output</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell
									component="th"
									scope="row"
									style={{ color: "white" }}
								>
									{row.name}
								</StyledTableCell>
								<StyledTableCell style={{ color: "white" }}>
									{row.calories}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<h2>Question:</h2>
			<p>
				You have the responsibility to complete the mission , decode the
				output of the given message to find the country name.
			</p>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Sample Input</StyledTableCell>
							<StyledTableCell>Sample Output</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow>
							<StyledTableCell
								component="th"
								scope="row"
								style={{ color: "white" }}
							>
								6adsafda@#sdfdf$%%
							</StyledTableCell>
							<StyledTableCell style={{ color: "#e33371" }}>
								Find the Answer
							</StyledTableCell>
						</StyledTableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<br />

			<InputField />
		</div>
	);
};

export default Content;
