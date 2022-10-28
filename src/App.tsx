import classNames from "classnames/bind";
import Footer from "./components/Footer";
import TodoApp from "./components/TodoApp";
import style from "./index.module.scss";
const cx = classNames.bind(style);
function App() {
  return (
    <div className={cx("wrapper")}>
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
