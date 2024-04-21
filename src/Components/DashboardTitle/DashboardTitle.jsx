import PropTypes from 'prop-types';

const DashboardTitle = ({ title }) => {
    return (

        <div className="bg-current w-full h-16 flex justify-center items-center shadow-md">
            <h1 className="font-bold text-[#7fefda] text-2xl   ">{title}</h1>
        </div>

    );
};
DashboardTitle.propTypes = {
    title: PropTypes.string
}

export default DashboardTitle;