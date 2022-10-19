import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./Tabs.module.scss";
import { ITab } from "./ITab";
const cx = classNames.bind(style);
interface Props {
  arrTabs: Array<ITab>;
  switchTab(tab: string): void;
}
function Tabs({ arrTabs, switchTab }: Props) {
  const [type, setType] = useState("All");
  useEffect(() => {
    switchTab(type);
  }, [type]);
  return (
    <div className={cx("wrapper")}>
      {arrTabs.map((tab, index) => (
        <button
          key={index}
          className={cx("btn-tab", { active: type === tab.name })}
          onClick={() => {
            setType(tab.name);
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
