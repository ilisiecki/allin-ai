"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { useProModal } from "@/lib/store/use-pro-modal";
import { MAX_FREE_COUNTS } from "@/public/constans";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const FreeCounter = (props: Props) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (props.isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <p className="pb-4">Free Generations:</p>
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {props.apiLimitCount} / {MAX_FREE_COUNTS}
            </p>
            <Progress
              value={(props.apiLimitCount / MAX_FREE_COUNTS) * 100}
              className="h-3"
            />
          </div>
          <Button variant="pro" onClick={proModal.onOpen} className="w-full">
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
