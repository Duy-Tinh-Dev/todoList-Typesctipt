import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./index.module.scss";
const cx = classNames.bind(style);
type Props = {
  arrTabs: Array<string>;
  switchTab(tab: string): void;
};
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
          className={cx("btn-tab", { active: type === tab })}
          onClick={() => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
