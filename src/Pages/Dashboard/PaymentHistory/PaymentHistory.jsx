import { ResponsiveContainer } from "recharts";
import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";
import DrawLinChart from "../../../Components/UserStatistic/DrawLinChart";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../api/AxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const PaymentHistory = () => {
    const [transportFee, setTransportFee] = useState('')
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: paymentData = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure(`/registerUser/paid/${user.email}`)
            return res.data;
        }
    })
    const fee = parseInt(paymentData[0]?.regUserInfo?.transportFee)

    // setTransportFee(tFee)
    useEffect(() => {
        if (paymentData.length > 0 && fee != 0) {
            const transFee = fee - 1200
            setTransportFee(transFee)
        } else {
            const transFee = 4000 - 1200
            setTransportFee(transFee)
        }
    }, [fee, paymentData.length])
     
    const data = [
        {
            name: "Transport Fee",

            amount: transportFee ,
        },
        {
            name: 'Maintanance Fee',

            amount: 500,
        },
        {
            name: 'Transport Card Fee',

            amount: 200,
        },
        {
            name: 'Application Fee',

            amount: 300,
        },
        {
            name: 'Others Fee',

            amount: 200,
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
                            {
                                paymentData?.length > 0 ? paymentData?.map(data =><tr key={data._id}>
                                <td>{data?.regUserInfo?.semester}</td>
                                <td>{data?.paymentDate}</td>
                                <td>{data?.regUserInfo?.transportFee || ''}</td>
                            </tr>):<></>

                            }
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