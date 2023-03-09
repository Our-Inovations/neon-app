import {
  updateAccessories,
  updatePrice,
} from "../../../store/customNeonSplice";
import { useSelector, useDispatch } from "react-redux";

export default function AccessoryBox(props) {
  const hadleSelectOfFiles = () => {
    dispatch(updateAccessories(props.id));
    dispatch(updatePrice());
  };
  const accI = useSelector((state) => state.customReducer.accessories);
  const dispatch = useDispatch();
  const isAdded = accI.find((item) => item === props.id);
  return (
    <div
      className={` ${
        isAdded ? "border-pink" : "border-transparent"
      } bord border-2 cursor-pointer accessoriesBox`}
      onClick={hadleSelectOfFiles}
    >
      <h2 className="w-2/3 text-lg font-bold">{props.title}</h2>
      <h3 className="font-bold text-pink">+${props.price}</h3>
    </div>
  );
}
