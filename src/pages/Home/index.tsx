import Header from "../../components/Header";
import TodoApp from "../../components/TodoApp";
import Footer from "../../components/Footer";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
const cx = classNames.bind(style);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default Home;
