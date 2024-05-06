import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../api/AxiosSecure/useAxiosSecure";
import DashboardTitle from "../../../../Components/DashboardTitle/DashboardTitle";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const PaymentClearance = () => {
  const axiosSecure = useAxiosSecure();
  const [payments, setpayments] = useState([]);
  const { refetch, data: paymentData = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/registerUser");
      setpayments(res.data);
      return res.data;
    },
  });
  console.log(payments);
  const handleClearance = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/registerUser/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleSearch = (e) => {
    const employee = e.target.value;

    if(e.target.value != null){
        const searchData = payments?.filter(payment => payment?.regUserInfo?.studentId.includes(employee));
        setpayments(searchData);
    }
  };
  return (
    <div>
      <DashboardTitle title={"Payments Clearance"}></DashboardTitle>

      <div className="overflow-x-auto mx-20 ">
        <div className="flex justify-between h-20 items-center">
          <h1 className="text-lg font-semibold px-1 text-black ">
            All Students
          </h1>
          <div className="flex relative w-64 h-10">
            <input
              type="text"
              placeholder="search"
              className="w-full text-black"
              onChange={handleSearch}
            />
            <div className="absolute right-4 top-3 bottom-2">
              <FaSearch size={22} color="gray" />
            </div>
          </div>
        </div>

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
              <th>Clearance</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment._id}>
                <td>{payment?.regUserInfo?.studentId}</td>
                <td>{payment?.regUserInfo?.name}</td>
                <td>{payment?.regUserInfo?.email}</td>
                <td>{payment?.regUserInfo?.semester}</td>
                <td>{`${payment?.paymentDate?.split("T")[0]}`}</td>
                <td>{payment?.regUserInfo?.transportFee}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.regUserInfo?.route}</td>
                <td>
                  <button
                    className={`btn btn-xs text-xs ${
                      payment?.clearance ? "btn-primary" : "btn-warning"
                    }`}
                    onClick={() => handleClearance(payment._id)}
                  >
                    {payment?.clearance ? "Given" : "Not Given"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentClearance;
