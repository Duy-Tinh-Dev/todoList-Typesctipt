import { ChangeEvent, useState, useEffect } from "react";
import classNames from "classnames/bind";

import style from "./index.module.scss";

const cx = classNames.bind(style);
type props = {
  outline?: boolean;
  className?: string;
  checked?: boolean;
  toggleSelect(isSelectAll: boolean): void;
};
function CheckBox({
  className = "",
  outline,
  checked = false,
  toggleSelect,
}: props) {
  const [checkbox, setCheckbox] = useState<boolean>(checked);
  useEffect(() => {
    setCheckbox(checked);
  }, [checked]);

  const classnames = cx("wrapper", {
    [className]: className,
    outline,
  });

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    const isCheck: boolean = event.target.checked;
    toggleSelect(isCheck);
    setCheckbox(isCheck);
  };

  return (
    <label className={classnames}>
      <input type="checkbox" onChange={handleCheckbox} checked={checkbox} />
      <span className={cx("checkmark")}></span>
    </label>
  );
}
export default CheckBox;
