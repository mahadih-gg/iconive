'use client'
import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";


export default function Breadcrumbs() {


  // get the path
  const path = usePathname();


  // convert the path to array
  const pathArray = path.split('/').slice(1);



  return (
    <Breadcrumb className="text-base font-[400] py-5 uppercase container">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {
          pathArray.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <BreadcrumbItem>
                {
                  index === 1 ? (
                    <BreadcrumbLink href={`/${pathArray[0]}/${item}`}>{item}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
                  )
                }
              </BreadcrumbItem>
              {
                index < pathArray.length - 1 && (
                  <BreadcrumbSeparator />
                )
              }
            </div>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
