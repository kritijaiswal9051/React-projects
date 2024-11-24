import "./App.css";
import Accordian from "./components/accordian/Accordian";
import PopupTest from "./components/custom-popup/PopupTest";
import CustomTab from "./components/custom-tab/CustomTab";
import GithubProfile from "./components/github-profile/GithubProfile";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
// import LoadMoreButton from "./components/loadMoreButton/LoadMoreButton";
import QRCodeGenrator from "./components/qrcode-genrator/QRCode";
import RandomColor from "./components/randomColor/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import StarRating from "./components/starRating/StarRating";
import ToDo from "./components/todo/ToDo";
function App() {
  return (
    <div className="App">
      <Accordian />
      <ToDo />
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      {/* <LoadMoreButton /> */}
      <QRCodeGenrator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=50"} />
      <CustomTab />
      <PopupTest />
      <GithubProfile />
    </div>
  );
}

export default App;
