import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
 req: Request,
 { params }: { params: { storeId: string } }
) {
 try {
  if (!params.storeId) {
   return new NextResponse("Store id is required", {
    status: 400,
   });
  }

  const { userId } = auth();

  if (!userId) {
   return new NextResponse("Unauthenticated", {
    status: 403,
   });
  }

  const body = await req.json();
  const { name } = body;

  if (!name) {
   return new NextResponse("Name is required", {
    status: 400,
   });
  }

  const store = await prismadb.store.updateMany({
   where: {
    id: params.storeId,
    userId,
   },
   data: {
    name,
   },
  });

  return NextResponse.json(store);
 } catch (error) {
  console.log("[STORE_PATCH]", error);
  return new NextResponse("Internal error", {
   status: 500,
  });
 }
}

export async function DELETE(
 req: Request,
 { params }: { params: { storeId: string } }
) {
 try {
  if (!params.storeId) {
   return new NextResponse("Store id is required", {
    status: 400,
   });
  }
  const { userId } = auth();

  if (!userId) {
   return new NextResponse("Unauthenticated", {
    status: 403,
   });
  }

  const store = await prismadb.store.deleteMany({
   where: {
    id: params.storeId,
    userId,
   },
  });

  return NextResponse.json(store);
 } catch (error) {
  console.log("[STORE_PATCH]", error);
  return new NextResponse("Internal error", {
   status: 500,
  });
 }
}
