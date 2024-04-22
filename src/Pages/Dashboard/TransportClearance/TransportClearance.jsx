import { FaCheck, FaSkullCrossbones } from "react-icons/fa";
import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";


const TransportClearance = () => {
    return (
        <div>
            <DashboardTitle title={'Transport Clearance'}></DashboardTitle>
            <div className="m-10 ">
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-black">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Semester Name</th>
                                <th>Application Date</th>
                                <th>Issue Date</th>
                                <th>Expire Date</th>
                                <th>Clearance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>Spring-2023</td>
                                <td>10-01-2023</td>
                                <td>12-01-2023</td>
                                <td>12-06-2023</td>
                                <td><FaCheck size={20} /></td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Fall-2023</td>
                                <td>14-06-2023</td>
                                <td>18-06-2023</td>
                                <td>06-01-2024</td>
                                <td><FaCheck size={20} /></td>
                            </tr>
                            {/* row 3 */}
                            <tr>

                                <td>Spring-2024</td>
                                <td>10-01-2024</td>
                                <td>12-01-2024</td>
                                <td>12-06-2024</td>
                                <td><FaCheck size={20} /></td>
                            </tr>
                            <tr>
                                <td>Spring-2024</td>
                                <td>12-06-2024</td>
                                <td>13-06-2024</td>
                                <td>12-01-2025</td>
                                <td><FaSkullCrossbones size={20} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TransportClearance;