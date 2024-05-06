import Swal from "sweetalert2";
import DashboardTitle from "../../../../Components/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../api/AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllStaffs = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: students = [] } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const result = await axiosSecure.get('/staffs')
            return result.data;
        }
    })

    const handleUserData = (id) => {
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
                axiosSecure.delete(`/staffs/${id}`)
                    .then(result => {
                        console.log(result.data)
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
            <DashboardTitle title={'Staffs'}></DashboardTitle>

            <div className="overflow-x-auto mx-20 ">
                <h1 className="text-lg font-semibold px-1 text-black pt-10 pb-5">All Students</h1>
                <table className="table table-zebra text-black border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Religion</th>
                            <th>Nationality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students?.map(student => <tr key={student._id}>
                                <td>{student?.employeeId}</td>
                                <td>{student?.name}</td>
                                <td>{student?.email}</td>
                                <td>{student?.religion}</td>
                                <td>{student?.nationality}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning" onClick={() => handleUserData(student._id)}>Delete</button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllStaffs;