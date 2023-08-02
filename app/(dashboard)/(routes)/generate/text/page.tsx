"use client";

import Heading from "@/components/layout/app/heading";
import Loader from "@/components/layout/app/loader";
import Empty from "@/components/layout/app/empty";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/layout/app/user-avatar";
import AiAvatar from "@/components/layout/app/ai-avatar";

const TextPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: data.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("../api/text", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title="Text"
        description="Generate text with Ai."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
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
                        placeholder="ex. Write me a description about."
                        {...field}
                        className=" border-0 px-2 caret-violet-500 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
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
              <Loader label="Generating text..." />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="Waiting for text generate..." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "flex w-full items-center gap-x-8 rounded-lg p-8",
                  message.role === "user"
                    ? "border border-black/10 bg-white"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <AiAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
