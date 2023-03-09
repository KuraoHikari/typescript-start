import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '6vh' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '94vh' }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
