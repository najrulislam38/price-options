import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <TiTick className="mr-2 text-green-500"></TiTick> {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
