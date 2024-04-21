import { PropTypes } from "prop-types";

const Card = ({ title, amount }) => {
    return (
        <div>
            <div className={`card w-96 bg-[#7fefda] shadow-xl`}>
                <div className="card-body text-[#304f5e]">
                    <h2 className="card-title">{title}</h2>
                    <p>{amount}</p>

                </div>
            </div >
        </div >
    );
};
Card.propTypes = {
    title: PropTypes.sreing,
    amount: PropTypes.number,
    // color: PropTypes.any,

}

export default Card;