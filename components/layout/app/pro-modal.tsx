"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useProModal } from "@/lib/store/use-pro-modal";
import { Zap } from "lucide-react";

const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1">
              Upgrade to Allin Ai
              <Badge variant="pro" className="px-2 py-1 text-sm">
                PRO
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-2 py-2 text-center text-base text-neutral-900">
            And get unlimited access to all tools.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="lg" variant="pro" className="mt-2 w-full">
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
