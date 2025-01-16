import Heading from "@/components/common/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const data = [
    {
        title: "Wholesaler and Distributor",
        value: "wholesaler"
    },
    {
        title: "Online Retailer",
        value: "online"
    },
    {
        title: "Hair Stylist or Salon Owner",
        value: "hair"
    }
]

export default function Wholesale__Info() {
    return (
        <div className="container md:py-[80px] py-[40px]">
            <Heading title="Are you a..." />

            <Tabs defaultValue="wholesaler" className="max-w-[1200px] mx-auto pt-[40px]">
                <TabsList className="grid w-full grid-cols-3 bg-white">
                    {data.map((item, index) => (
                        <TabsTrigger className="text-[#383838] text-[18px] font-[500] shadow-none " key={index} value={item.value}>{item.title}</TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="wholesaler">
                    <Card>
                        <CardHeader>
                            <CardTitle>Wholesaler and Distributor</CardTitle>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="online">
                    <Card>
                        <CardHeader>
                            <CardTitle>Online Retailer</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, youll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}