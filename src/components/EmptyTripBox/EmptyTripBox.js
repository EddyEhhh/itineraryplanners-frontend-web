import styles from "./EmptyTripBox.scss";
import FAFAFA from "../../icons/FAFAFA.jpg";
import AddButton from "../AddButton/AddButton";

function EmptyTripBox() {
  return (
    <div className="h-fit flex-col items-center justify-center">
      <div className="w-full h-3/4 rounded-md relative">
        <img
          src={FAFAFA}
          className="rounded-md w-full h-full border-2 border-dashed border-light-gray"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default EmptyTripBox;
