import './Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map(point => point.value);
  const totalMax = Math.max(...dataPointValue);

	return (
		<div className='chart'>
			{dataPoints.map((point) => (
				<ChartBar
					key={point.label}
					value={point.value}
					maxValue={totalMax}
					label={point.label}
				/>
			))}
		</div>
	);
}

export default Chart;
