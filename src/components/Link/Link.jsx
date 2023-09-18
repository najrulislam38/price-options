import PropTypes from "prop-types";
import {} from "react-icons/gi";

const Link = ({ route }) => {
  return (
    <div>
      <li className=" mr-10 hover:bg-amber-500 md:hover:bg-yellow-400 px-6 py-2">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
