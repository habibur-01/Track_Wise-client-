import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PropTypes } from "prop-types"

const DrawLinChart = ({ data }) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"
                    />
                    <YAxis
                        domain={[0, 4000]}
                        label={{ value: 'Amount(taka)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#82ca9d" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
DrawLinChart.propTypes = {
    data: PropTypes.array,
    // colors: PropTypes.array
}

export default DrawLinChart;