import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tab from "./components/Tab";

export const mock_data = [
  {
    "id": "95a2aaca-bab8-4504-8646-f75b325ec0e7",
    "booked": false,
    "area": "Helsinki",
    "startTime": 1523610000000,
    "endTime": 1523617200000
  },
  {
    "id": "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    "booked": true,
    "area": "Tampere",
    "startTime": 1523602800000,
    "endTime": 1523610000000
  }
]
function App() {
  return (
    <div className="App">
      <Header />
      <Tab />
      <Tab />
      <Header/>
      <Tab/>
      <Header/>
      <Tab/>
      <Tab/>
      <Footer />
    </div>
  );
}

export default App;
