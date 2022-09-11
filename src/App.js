import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Jobs from "./Jobs";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [job, setJob] = useState([]);
	const [value, setValue] = useState(0);

	const fetchJobs = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setJob(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	const handleClick = (index) => {
		setValue(index);
	};

	return (
		<div className="app">
			<header>
				<h1>Experience</h1>
			</header>
			<section>
				{loading ? (
					<Loading />
				) : (
					<Jobs handleClick={handleClick} job={job} value={value} />
				)}
			</section>
		</div>
	);
}

export default App;
