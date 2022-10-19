import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import Tabs from "../../../Tabs";
const cx = classNames.bind(style);
interface Props {
  switchTab(tab: string): void;
  clearAllTodo(): void;
  activeTodoCount: number;
}
const tabs = [
  {
    id: 1,
    name: "All",
    active: true,
  },
  {
    id: 2,
    name: "Active",
    active: false,
  },
  {
    id: 3,
    name: "Completed",
    active: false,
  },
];
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
