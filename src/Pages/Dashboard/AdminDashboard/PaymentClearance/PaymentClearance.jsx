import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../api/AxiosSecure/useAxiosSecure";
import DashboardTitle from "../../../../Components/DashboardTitle/DashboardTitle";
import Swal from "sweetalert2";


const PaymentClearance = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: paymentData = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/registerUser')
            return res.data;
        }
    })
    const handleClearance = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/registerUser/${id}`)
                    .then(result => {
                        if (result.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()

                        }
                    })

            }
        });


    }
    return (
        <div>
            <DashboardTitle title={'Payments Clearance'}></DashboardTitle>

            <div className="overflow-x-auto mx-20 ">
                <h1 className="text-lg font-semibold px-1 text-black pt-10 pb-5">All Students</h1>
                <table className="table table-zebra text-black border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Semester</th>
                            <th>Payment Date</th>
                            <th>Amount</th>
                            <th>Transection Id</th>
                            <th>Route</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentData?.map(payment => <tr key={payment._id}>
                                <td>{payment?.regUserInfo?.studentId}</td>
                                <td>{payment?.regUserInfo?.name}</td>
                                <td>{payment?.regUserInfo?.email}</td>
                                <td>{payment?.regUserInfo?.semester}</td>
                                <td>{`${payment?.paymentDate?.split('T')[0]}`}</td>
                                <td>{payment?.regUserInfo?.transportFee}</td>
                                <td>{payment?.transactionId}</td>
                                <td>{payment?.regUserInfo?.route}</td>
                                <td>
                                    <button className={`btn btn-sm  ${payment?.clearance ? 'btn-primary' : 'btn-warning'}`} onClick={() => handleClearance(payment._id)}>
                                        {
                                            payment?.clearance ? 'Given': 'Not Given'
                                        }
                                    </button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentClearance;