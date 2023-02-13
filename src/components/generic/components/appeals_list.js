import { CircularProgressbar } from "react-circular-progressbar";
import User from "../../icons/user-circle-black.svg";
import water_hand_pumps from "../../icons/water-hand-pumps.png"
import Appeal_card from "./appeal_card";


function Appeals_list(props) {
  return (
    <div>
      <div className="flex gap-12">
        <Appeal_card />
        <Appeal_card />
        <Appeal_card />
      </div>
      <div className="flex gap-12 mt-12">
        <Appeal_card />
        <Appeal_card />
        <Appeal_card />
      </div>
    </div>
  );
}
export default Appeals_list;