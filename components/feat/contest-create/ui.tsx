"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { type ContestFormType, useContestForm } from "./form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ContestOption } from "./contest-option";
import { ContestOptionAdd } from "./contest-option-add";
import { client } from "@/api/client";

export function ContestCreateForm() {
  const form = useContestForm();
  const options = form.watch("options");

  const onSubmit = async (data: ContestFormType) => {
    const res = await client.api.contest.$post({ json: data });
    const json = await res.json();

    if (!res.ok) {
      alert(json.message);
    }

    alert(
      `Contest URL: ${process.env.APP_URL}/api/contest-ui/${json.contest.id}`
    );

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (e) =>
          alert("Invalid form values.")
        )}
        className="space-y-8 max-w-[480px]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Contest Name" {...field} />
              </FormControl>
              <FormDescription>The topic of your contest</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Deadline</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal bg-transparent",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                The contest will expire on this date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <h3 className="text-xl">Contest Options:</h3>

          {options.map((option, idx) => (
            <ContestOption
              title={option.name}
              onDelete={() =>
                form.setValue("options", [
                  ...options.slice(0, idx),
                  ...options.slice(idx + 1),
                ])
              }
            />
          ))}

          <ContestOptionAdd />

          <FormDescription>
            The options to choose from in your contest
          </FormDescription>
        </div>
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
