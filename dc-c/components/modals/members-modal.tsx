"use client";

import axios from "axios";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ServerWithMembersWithProfiles } from "@/types";
import { ScrollArea } from "../ui/scroll-area";

export const MembersModal = () => {
 const { onOpen, isOpen, onClose, type, data } = useModal();

 const isModalOpen = isOpen && type === "members";
 const { server } = data as {
  server: ServerWithMembersWithProfiles;
 };

 return (
  <Dialog open={isModalOpen} onOpenChange={onClose}>
   <DialogContent className="bg-white text-black p-0 overflow-hidden">
    <DialogHeader className="pt-8 px-6">
     <DialogTitle className="text-2xl text-center font-bold">
      Manage members
     </DialogTitle>
     <DialogDescription className="text-center text-zinc-500">
      {server?.members?.length} Members
     </DialogDescription>
    </DialogHeader>

    <ScrollArea className="mt-8 max-h-[420px] pr-6">
     {server?.members?.map((member) => (
      <div key={member.id}></div>
     ))}
    </ScrollArea>
   </DialogContent>
  </Dialog>
 );
};
