import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
	return (
		<div
			style={{
				textAlign: "center",
				fontSize: 25,
			}}
		>
			<br/>
			<br/>
			<br/>
			<p>
				Follow us on <a href="https://www.instagram.com/d_coder_dtu/"><InstagramIcon style={{ fontSize: 25 }} /></a>{" "}
				<a href="https://www.linkedin.com/company/dcoder/"><LinkedInIcon style={{ fontSize: 25 }} /></a>
			</p>
		</div>
	);
};

export default Footer;
