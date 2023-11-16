import { BsFillCartPlusFill } from "react-icons/bs";
const Dext = ({ to }) => {
  return (
    <div className="t_1">
      <a href={`/${to}`}>
        <BsFillCartPlusFill>{to === "" ? "" : to} </BsFillCartPlusFill>
      </a>
    </div>
  );
};

export default Dext;
