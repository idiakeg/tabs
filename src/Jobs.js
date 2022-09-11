import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Jobs = ({ job, value, handleClick }) => {
	// the company, title,dates and duties that be displayed to the user is dependent on the "value" variable passed in from app.js. this value will be changeable upon the click of a button that changes the value variable, causing a rerender of rthe page with the correct data
	const { company, title, dates, duties } = job[value];
	return (
		<div className="job__container">
			<div className="button__container">
				{job.map(({ id, company }, index) => (
					<button onClick={() => handleClick(index)} key={id}>
						{company}
					</button>
				))}
			</div>
			<div className="job__content">
				<p className="title">{title}</p>
				<p className="company">{company}</p>
				<p className="dates">{dates}</p>
				{duties.map((duty, index) => {
					return (
						<div className="duty" key={index}>
							<FaAngleDoubleRight />
							<p className="duty__text">{duty}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Jobs;
