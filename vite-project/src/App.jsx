import { MiPrimerComponente } from "./components/miPrimerComponente/MiPrimerComponente";
import { Estado } from "./components/estado/Estado";
const MyFuction = () => {
  return <>Hola</>;
};
function App() {
  return (
    <>
      <Estado />
      <MyFuction />
      <MiPrimerComponente name={"Bianca"} last_name={"Lopez"} />
    </>
  );
}
export default App;
