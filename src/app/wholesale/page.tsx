import Other__Hero from "@/components/common/Other__Hero";
import Wholesale__Login from "./_utils/Wholesale__Login";
import Wholesale__Info from "./_utils/Wholesale__Info";

export default function WholeSalePage() {
  return (
    <main className="">
      <Other__Hero title="Wholesale" />
      <Wholesale__Login />  
      <Wholesale__Info />
    </main>
  )
}
