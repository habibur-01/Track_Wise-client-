import Card from "../../Components/Card/Card";
import DashboardTitle from "../../Components/DashboardTitle/DashboardTitle";


const UserDashboard = () => {

    return (
        <div>
            <DashboardTitle title={'User Dashboard'}></DashboardTitle>

            <div className="grid lg:grid-cols-4 gap-6 my-10 mx-10">
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

        </div >
    );
};

export default UserDashboard;
// color = { '#7fefda'}
// color = { '#274756'}
// color = { '#417a7e'}