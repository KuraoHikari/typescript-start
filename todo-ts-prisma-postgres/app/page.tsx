import Login from './components/auth/Login';
import Todo from './components/Todo';
import Navbar from './Layout/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Todo />
        <Login />
      </main>
    </>
  );
}
