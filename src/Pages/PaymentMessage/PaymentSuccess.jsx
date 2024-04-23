import { Link, useParams } from "react-router-dom";
import check from "../../assets/check.png"

const PaymentSuccess = () => {
    const {transId}= useParams()
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/3 h-[300px] border-2 bg-base-200 rounded-md flex flex-col justify-center items-center">
                <img src={check} className="w-14 h-14 rounded-full" alt="Success icon" />
                <h1 className="text-xl font-medium">Payment Successfull</h1>
               <p>Transaction Id: {transId}</p>
               <Link to={"/"}><button className="btn btn-sm py-1 px-2 text-white btn-success mt-4">Back Home</button></Link>
            </div>
            
        </div>
    );
};

export default PaymentSuccess;