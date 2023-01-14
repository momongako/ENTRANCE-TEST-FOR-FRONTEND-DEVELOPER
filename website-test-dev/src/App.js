
import './App.css';
import Tabs from './components/tabs';
import Gallery from './components/gallery';
function App() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <div className="left " />
          <div className="center ">
            <Tabs />
            <Gallery />
          </div>
          <div className="right " />
        </div>
      </div>
      {/* end screen pc  */}

    </>
  );
}

export default App;
