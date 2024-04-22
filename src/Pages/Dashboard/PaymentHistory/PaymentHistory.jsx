import { ResponsiveContainer } from "recharts";
import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";
import DrawLinChart from "../../../Components/UserStatistic/DrawLinChart";


const PaymentHistory = () => {
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

    return (
        <div>
            <DashboardTitle title={'Payment History'}></DashboardTitle>
            <div className="m-10 bg-base-200 p-10 rounded-md min-h-fit flex gap-10">

                <div className="w-[50%] bg-[#355b64] p-10 rounded-md">
                    <table >
                        <caption className="text-xl text-[#e3eded] pb-6 font-semibold">Payment List</caption>
                        <thead>
                            <tr>
                                <th >Semester Name</th>
                                <th>Payment Date</th>
                                <th>Total Amount</th>
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
                        <DrawLinChart data={data}></DrawLinChart>
                    </ResponsiveContainer>

                </div>


            </div>

        </div>
    );
};

export default PaymentHistory;