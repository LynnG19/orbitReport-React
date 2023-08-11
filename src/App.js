import useState from "react";
import satData from "./components/satData";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
   <Table sat={sat} />
    </div>
  );
}
const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};

export default App;
