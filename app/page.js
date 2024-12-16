import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen flex-col flex">
      <Header />
      <Main/>
    </div>
  );
}
