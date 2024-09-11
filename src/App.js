import './App.css';
import SideMenu from './components/Sidebar/SideMenu';
import MainComponent from './components/main/MainContent';
function App() {
  return (
    <div className="flex h-screen font-poppins">
      {/* Side menu */}
      <div className="w-{308.22px} pb-10">
        {/* Your side menu content */}
        <SideMenu />
      </div>

      {/* Main content add border */}
      <div className="flex-grow   ">
        {/* Your main content */}
       <MainComponent/>
      </div>
    </div>
  );
}

export default App;
