import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  return <header className={cx("header")}>todos</header>;
}

export default Header;
