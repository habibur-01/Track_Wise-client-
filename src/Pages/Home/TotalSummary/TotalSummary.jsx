// import { GrUserWorker } from 'react-icons/gr';
import './styles.css'


const TotalSummary = () => {
    const totalStaff = 50;
    const totalStudents = 25000
    const totalRegStudents = 5000
    return (
        <div className="bgImg h-[400px] w-full">
            <div className="bg-[#002147]/80 h-full w-full backdrop-blur-sm md:flex md:justify-center md:items-center py-12">
                <div className='w-[70%] flex justify-evenly' data-aos="fade-left">
                    <div className='text-white border border-[#fdc800] p-4 w-40'>
                        {/* <p className='h-10 w-10 rounded-full bg-[#fdc800] flex justify-center items-center '><GrUserWorker size={20} color='#002147' /></p> */}
                        <div>
                            <p className='text-2xl font-semibold ' >{totalStaff}</p>
                            <h1 className=''>Total Staffs</h1>
                        </div>
                    </div>
                    <div className='text-white border border-[#fdc800] p-4 w-40'>
                        {/* <p className='h-10 w-10 rounded-full bg-[#fdc800] flex justify-center items-center '><GrUserWorker size={20} color='#002147' /></p> */}
                        <div>
                            <p className='text-2xl font-semibold ' >{totalStudents}</p>
                            <h1 className=''>Total Students</h1>
                        </div>
                    </div>
                    <div className='text-white border border-[#fdc800] p-4 w-40'>
                        {/* <p className='h-10 w-10 rounded-full bg-[#fdc800] flex justify-center items-center '><GrUserWorker size={20} color='#002147' /></p> */}
                        <div>
                            <p className='text-2xl font-semibold ' >{totalRegStudents}</p>
                            <h1>Register Students</h1>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default TotalSummary;