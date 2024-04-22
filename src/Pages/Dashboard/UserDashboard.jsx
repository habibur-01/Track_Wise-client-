import Card from "../../Components/Card/Card";
import DashboardTitle from "../../Components/DashboardTitle/DashboardTitle";
import "./styles.css"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer, Line, LineChart, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#a259ff', '#47ff8b', '#43f9d8'];
const data = [
    {
        name: 'Transport Fee',

        amount: 2400,
    },
    {
        name: 'Maintanance Fee',

        amount: 2210,
    },
    {
        name: 'Transport Card Fee',

        amount: 2290,
    },
    {
        name: 'Application Fee',

        amount: 2000,
    },
    {
        name: 'Others Fee',

        amount: 2181,
    },

];

const UserDashboard = () => {


    return (
        <div>
            <DashboardTitle title={'User Dashboard'}></DashboardTitle>

            <div className="mx-10">
                <div className="grid lg:grid-cols-4 gap-6 my-10">
                    <div >
                        <Card title={'Total Paid'} amount={4000}></Card>
                    </div>
                    <div>
                        <Card title={'Total Payable'} amount={6000}  ></Card>
                    </div>
                    <div>
                        <Card title={'Total Due'} amount={300}  ></Card>
                    </div>
                    <div>
                        <Card title={'Others'} amount={100}  ></Card>
                    </div>

                </div>
                <div className="bg-base-200 rounded-md min-h-fit w-full ">
                    <h1 className="text-black text-center text-xl py-10">Payment Scheme</h1>

                    <div className="flex gap-10 pb-10 px-2">
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
                                    domain={[0, 3000]}
                                    label={{ value: 'Amount(taka)', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="amount" stroke="#82ca9d" activeDot={{ r: 8 }} />

                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    {/* </ResponsiveContainer> */}
                </div>
            </div>
            <div className="m-10 bg-base-200 p-10 rounded-md min-h-fit flex gap-10">

                {/* <h1 className="text-xl text-[#e3eded] pb-6 text-center">Semister wise</h1> */}
                <div className="w-[50%] bg-[#355b64] p-10 rounded-md">
                    <table >
                        <caption className="text-xl text-[#e3eded] pb-6 font-semibold">Semester List</caption>
                        <thead>
                            <tr>
                                <th >Semester Name</th>
                                <th>Issue Date</th>
                                <th>Expire Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Spring-2024</td>
                                <td>24/01/2024</td>
                                <td>31/06/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-[50%]">
                    <h1 className="text-xl text-[#141515] pb-6 text-center">Semester wise Payment</h1>
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
                                domain={[0, 3000]}
                                label={{ value: 'Amount(taka)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#82ca9d" activeDot={{ r: 8 }} />

                        </LineChart>
                    </ResponsiveContainer>

                </div>


            </div>

        </div >
    );
};

export default UserDashboard;
// color = { '#7fefda'}
// color = { '#274756'}
// color = { '#417a7e'}