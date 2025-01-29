import Product__Grid from "./Product__Grid";
import Filter from "./Filter";
import Header__Box from "./Header__Box";
import Sidebar__Banner from "./Sidebar__Banner";
import A__Pagination from "../Pagination";

export default function Categories__Products() {
    return (
        <div className="container md:py-[80px] py-[40px]">
            <Header__Box />
            <div className="flex gap-8 ">
                <div className="max-w-[346px] w-full flex-1 space-y-10 md:block hidden">
                    <Filter />
                    <Sidebar__Banner />
                </div>
                <div className="flex-1">
                    <Product__Grid />
                    <div className="flex justify-end pt-20">
                        <A__Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}
