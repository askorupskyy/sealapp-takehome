import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ContestFormSchema = z.object({
  title: z.string(),
  deadline: z.date(),
  options: z
    .array(z.object({ name: z.string() }))
    .min(2, { message: "Contest must have at least two options." }),
});

export type ContestFormType = z.infer<typeof ContestFormSchema>;

export const useContestForm = () =>
  useForm<ContestFormType>({
    resolver: zodResolver(ContestFormSchema),
    defaultValues: {
      options: [{ name: "Yes" }, { name: "No" }],
      deadline: undefined,
      title: "",
    },
  });
