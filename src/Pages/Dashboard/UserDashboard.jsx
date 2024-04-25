import { ResponsiveContainer } from "recharts";
import Card from "../../Components/Card/Card";
import DashboardTitle from "../../Components/DashboardTitle/DashboardTitle";
import BarCharts from "../../Components/UserStatistic/BarCharts";
import DrawLinChart from "../../Components/UserStatistic/DrawLinChart";
import "./styles.css"
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const colors = ['#0088FE', '#00C49F', '#a259ff', '#47ff8b', '#43f9d8'];


const UserDashboard = () => {
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
    console.log(parseInt(paymentData[0]?.regUserInfo?.transportFee))
    const fee = parseInt(paymentData[0]?.regUserInfo?.transportFee)
    
    // setTransportFee(tFee)
   useEffect(()=>{
    if(paymentData.length>0 && fee!=0){
        const transFee = fee- 1200
        setTransportFee(transFee)
    }else{
        const transFee=4000-1200
        setTransportFee(transFee)
    }
   },[fee, paymentData.length])
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
            <DashboardTitle title={'User Dashboard'}></DashboardTitle>

            <div className="mx-10">
                <div className="grid lg:grid-cols-4 gap-6 my-10">
                    <div >
                        <Card title={'Total Paid'} amount={`${paymentData.length>0? fee: '0'}`}></Card>
                    </div>
                    <div>
                        <Card title={'Total Payable'} amount={`${paymentData.length>0? fee: '0'}`}  ></Card>
                    </div>
                    <div>
                        <Card title={'Total Due'} amount={0}  ></Card>
                    </div>
                    <div>
                        <Card title={'Others'} amount={0}  ></Card>
                    </div>

                </div>
                <div className="bg-base-200 rounded-md min-h-fit w-full ">
                    <h1 className="text-black text-center text-xl py-10">Payment Scheme</h1>

                    <div className="flex gap-10 pb-10 px-2">

                        <ResponsiveContainer width="100%" height={400}>
                            <BarCharts data={data} colors={colors}></BarCharts>
                        </ResponsiveContainer>

                        <ResponsiveContainer width="100%" height={400}>
                            <DrawLinChart data={data}></DrawLinChart>
                        </ResponsiveContainer>

                    </div>

                </div>
            </div>
            <div className="m-10 bg-base-200 p-10 rounded-md min-h-fit flex gap-10">

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
                                <td>{paymentData.length > 0? paymentData[0]?.regUserInfo?.semester : ''}</td>
                                <td>{paymentData.length > 0? paymentData[0]?.regUserInfo?.issueDate || '' : ''}</td>
                                <td>{paymentData.length > 0? paymentData[0]?.regUserInfo?.expireDate || '' : ''}</td>
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

        </div >
    );
};

export default UserDashboard;
// color = { '#7fefda'}
// color = { '#274756'}
// color = { '#417a7e'}