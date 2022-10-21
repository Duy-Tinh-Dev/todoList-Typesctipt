import classNames from "classnames/bind";
import Tabs from "../../../Tabs";

import style from "./index.module.scss";
const cx = classNames.bind(style);
type Props = {
  switchTab(tab: string): void;
  clearAllTodo(): void;
  activeTodoCount: number;
};
const tabs = ["All", "Active", "Completed"];
function Footer({ switchTab, clearAllTodo, activeTodoCount }: Props) {
  return (
    <footer className={cx("wrapper")}>
      <span>{activeTodoCount} item left</span>
      <Tabs arrTabs={tabs} switchTab={switchTab}></Tabs>
      <button className={cx("btn-clear")} onClick={clearAllTodo}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
