import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { changeStatus } from "../../redux/slices/filterSlice";
import style from "./index.module.scss";

const cx = classNames.bind(style);
type TTabsProps = {
  arrTabs: Array<string>;
};
function Tabs({ arrTabs }: TTabsProps) {
  const [type, setType] = useState<string>("All");
  const dispatch = useDispatch();

  const handleSwitchTab = (tab: string): void => {
    dispatch(changeStatus(tab));
    setType(tab);
  };

  return (
    <div className={cx("wrapper")}>
      {arrTabs.map((tab, index) => (
        <button
          key={index}
          className={cx("btn-tab", { active: type === tab })}
          name={tab}
          onClick={() => {
            handleSwitchTab(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
export default Tabs;
