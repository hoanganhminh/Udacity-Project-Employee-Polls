const BoardEntry = (props) => {
	const { avatar, name, numQanswered, numQasked } = props;

	return (
		<div className="card mb-3">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center">
						<img
							src={avatar}
							alt={`${name.toLowerCase()} avatar`}
							width="40"
							height="40"
							className="me-3"
						/>
						<p className="mb-0">{name}</p>
					</div>
					<div>
						<p className="mb-0">Questions: {numQasked}</p>
						<p className="mb-0">Answers: {numQanswered}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoardEntry;
