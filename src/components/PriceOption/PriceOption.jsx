import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/ mon</span>
      </h2>
      <h4 className="text-3xl text-center py-5">{name}</h4>
      <div className="flex-1">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-500 py-2 rounded-lg my-5">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
