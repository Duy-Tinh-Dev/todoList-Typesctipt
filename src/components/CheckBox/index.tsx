import classNames from "classnames/bind";
import { ChangeEvent, useState, useEffect } from "react";
import style from "./CheckBox.module.scss";
const cx = classNames.bind(style);
interface props {
  outline?: boolean;
  className?: string;
  checked?: boolean;
  toggleSelect?(isSelectAll: boolean): void;
}
function CheckBox({
  className = "",
  outline,
  checked = false,
  toggleSelect = () => {},
}: props) {
  const [checkbox, setCheckbox] = useState<boolean>(checked);
  useEffect(() => {
    setCheckbox(checked);
  }, [checked]);
  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    const isCheck = event.target.checked;
    toggleSelect(isCheck);
    setCheckbox(isCheck);
  };
  const classnames = cx("wrapper", {
    [className]: className,
    outline,
  });
  return (
    <label className={classnames}>
      <input type="checkbox" onChange={handleCheckbox} checked={checkbox} />
      <span className={cx("checkmark")}></span>
    </label>
  );
}

export default CheckBox;
