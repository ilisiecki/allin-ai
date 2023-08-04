"use client";

import axios from "axios";
import { useState } from "react";
import { Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";

type Props = {
  isPro: boolean;
};

export const SubscriptionButton = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={props.isPro ? "default" : "pro"}
      disabled={loading}
      onClick={onClick}
    >
      {props.isPro ? "Manage Subscription" : "Upgrade"}
      {!props.isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  );
};
