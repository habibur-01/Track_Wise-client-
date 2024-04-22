import { Bar, BarChart, CartesianGrid, Cell, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PropTypes } from "prop-types"

const BarCharts = ({ data, colors }) => {

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    width={800}
                    height={400}
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
                        label={{ value: 'Fee Name', position: 'bottom' }} />
                    <YAxis domain={[0, 3000]}
                        label={{ value: 'Amount(taka)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#82ca9d" shape={<Rectangle />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 5]} />
                        ))}
                    </Bar>
                    {/* <Bar dataKey="amt" fill="#82ca9d" activeBar={colors.map((color,index)=><Rectangle key={index} fill={color} stroke="purple" />)} /> */}
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};
BarCharts.propTypes = {
    data: PropTypes.array,
    colors: PropTypes.array
}
export default BarCharts;


