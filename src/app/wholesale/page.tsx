import Other__Hero from "@/components/common/Other__Hero";
import Wholesale__Login from "./_utils/Wholesale__Login";
import Wholesale__Info from "./_utils/Wholesale__Info";
import Wholesale__Register from "./_utils/Wholesale__Register";

export default function WholeSalePage() {
  return (
    <main className="">
      <Other__Hero title="Wholesale" image="/wholesale.jpg" />
      <Wholesale__Login />  
      <Wholesale__Info />
      <Wholesale__Register /> 
    </main>
  )
}
