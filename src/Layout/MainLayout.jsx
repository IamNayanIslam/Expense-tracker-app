import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loading from "./Loading";

function MainLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
