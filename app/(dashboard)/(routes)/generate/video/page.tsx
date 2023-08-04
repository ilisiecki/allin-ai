"use client";

import Heading from "@/components/layout/app/heading";
import Loader from "@/components/layout/app/loader";
import Empty from "@/components/layout/app/empty";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProModal } from "@/lib/store/use-pro-modal";

const VideoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setVideo(undefined);
      const response = await axios.post("../api/video", data);
      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title="Video"
        description="Generate video with Ai."
        icon={VideoIcon}
        iconColor="text-orange-500"
        bgColor="bg-orange-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border border-neutral-300 px-3 py-1 focus-within:shadow-sm"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        id="prompt"
                        aria-describedby="prompt"
                        disabled={isLoading}
                        placeholder="ex. A fox in the forest."
                        {...field}
                        className="border-0 px-2 caret-orange-500 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                type="submit"
                className="col-span-12 w-full lg:col-span-2"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="flex w-full items-center justify-center rounded-lg bg-muted p-16">
              <Loader label="Generating video..." />
            </div>
          )}
          {!video && !isLoading && (
            <Empty label="Waiting for video generate..." />
          )}
          {video && (
            <video
              controls
              className="mt-8 aspect-video w-full rounded-lg border bg-black"
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
