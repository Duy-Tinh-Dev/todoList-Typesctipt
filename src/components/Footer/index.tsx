import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <p>Double-click to edit a todo</p>
      <p>Created by Duy Tinh</p>
      <p>Part of TodoMVC</p>
    </footer>
  );
}

export default Footer;
