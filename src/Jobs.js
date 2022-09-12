import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Jobs = ({ job, value, handleClick }) => {
	const { company, title, dates, duties } = job[value];
	return (
		<div className="job__container">
			<div className="button__container">
				{job.map(({ id, company }, index) => (
					<button
						className={index === value ? "active" : undefined}
						onClick={() => handleClick(index)}
						key={id}
					>
						{company}
					</button>
				))}
			</div>
			<div className="job__content">
				<p className="title">{title}</p>
				<p className="company">{company}</p>
				<p className="dates">{dates}</p>
				<section className="duty__container">
					{duties.map((duty, index) => {
						return (
							<div className="duty" key={index}>
								<span className="icon">
									<FaAngleDoubleRight />
								</span>
								<p className="duty__text">{duty}</p>
							</div>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default Jobs;
