"use client";

// import { createBoard } from "@/actions/create-board";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";
import { title } from "process";
import { createBoard } from "@/actions/create-board";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("Board created");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2"></div>
      <FormInput id="title" errors={fieldErrors} label="Board Title" />
      <FormButton />
    </form>
  );
};
