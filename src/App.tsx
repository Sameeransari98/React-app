import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import HeroSlider from "./components/hero/hero_slider";
import NavigationBar from "./components/navbar/nav";
import Section2 from "./components/home sections/section1";
import Section3 from "./components/home sections/section3";
import InstagramImages from "./components/home sections/instagramgallery";
import Footer from "./components/footer/footer";
import FooterCopyright from "./components/footer/footer-copyright";
import TopHeader from "./components/top header/topheader";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/appeals", label: "Appeals" },
];
const images = [
  "/src/images/react1.jpg",
  "/src/images/react2.jpg",
  "/src/images/react3.jpg",
];

const titles = ["Forest Fond", "Mountain Hikes", "Ocean Essence"];
const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];
const columns = [
  {
    title: "Quick Links",
    links: [
      { href: "/link1", text: "Home" },
      { href: "/link2", text: "About Us" },
      { href: "/link3", text: "Contact Us" },
      { href: "/link4", text: "Appeals" },
      { href: "/link5", text: "Donate Now" },
    ],
  },
  {
    title: "Services Links",
    links: [
      { href: "/service1", text: "Feed The Fasting" },
      { href: "/service2", text: "Ramadan 2025" },
      { href: "/service3", text: "Privacy Policy" },
      { href: "/service4", text: "Cookies Policy" },
      { href: "/service5", text: "Faqs" },
    ],
  },
  {
    title: "Services Links",
    links: [
      { href: "/service1", text: "Feed The Fasting" },
      { href: "/service2", text: "Ramadan 2025" },
      { href: "/service3", text: "Privacy Policy" },
      { href: "/service4", text: "Cookies Policy" },
      { href: "/service5", text: "Faqs" },
    ],
  },
];
function App() {
  return (
    <>
      <div className="App">
        <TopHeader />
        <NavigationBar links={links} />
        <HeroSlider
          images={images}
          titles={titles}
          descriptions={descriptions}
        />
        <Section2 />
        <Section3 />
        <InstagramImages />
        <Footer columns={columns} />
        <FooterCopyright />
      </div>
    </>
  );
}

export default App;
