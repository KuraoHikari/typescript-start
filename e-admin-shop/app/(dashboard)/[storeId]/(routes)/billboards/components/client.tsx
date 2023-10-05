"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface BillboardClientProps {}

export const BillboardClient: React.FC<
 BillboardClientProps
> = ({}) => {
 const params = useParams();
 const router = useRouter();

 return (
  <>
   <div className="flex items-center justify-between">
    <Heading
     title={`Billboards (10)`}
     description="Manage billboards for your store"
    />
    <Button
     onClick={() =>
      router.push(`/${params.storeId}/billboards/new`)
     }
    >
     <Plus className="mr-2 h-4 w-4" /> Add New
    </Button>
   </div>
   <Separator />

   <Heading
    title="API"
    description="API Calls for Billboards"
   />
   <Separator />
  </>
 );
};
