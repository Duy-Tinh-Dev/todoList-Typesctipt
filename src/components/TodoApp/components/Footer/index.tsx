import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import Tabs from "../../../Tabs";
import { clearAllTodo } from "../../../../redux/slices/todoSlice";
import { counterTodo } from "../../../../redux/selectors";
import style from "./index.module.scss";

const cx = classNames.bind(style);
const tabs = ["All", "Active", "Completed"];
function Footer() {
  const dispatch = useDispatch();
  const counter = useSelector(counterTodo);

  const handleDelete = (): void => {
    dispatch(clearAllTodo());
  };

  return (
    <footer className={cx("wrapper")}>
      <span>{counter} item left</span>
      <Tabs arrTabs={tabs}></Tabs>
      <button className={cx("btn-clear")} onClick={handleDelete}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
