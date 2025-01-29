import Breadcrumbs from "@/components/common/Breadcrumb";
import { BannerSection } from "../__utils/Banner__Section";
import Categories__Products from "../__utils/products";

export default function CategoryPage() {
  return (
    <main >
        <Breadcrumbs />
        <BannerSection />
        <Categories__Products />
    </main>
  );
}

