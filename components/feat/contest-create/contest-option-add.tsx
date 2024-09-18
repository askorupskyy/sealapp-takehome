import type { ContestFormType } from "./form";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ContestOptionAdd = () => {
  const form = useFormContext<ContestFormType>();
  const [name, setName] = useState("");

  return (
    <div className="flex gap-4">
      <Input value={name} onChange={(e) => setName(e.target.value)} />

      <Button
        type="button"
        onClick={() => {
          form.setValue("options", [
            ...form.getValues("options"),
            { name: name },
          ]);
          setName("");
        }}
      >
        Add
      </Button>
    </div>
  );
};
