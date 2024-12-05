"use client";

import { USER_LOGIN_FORM } from "@/constants/forms";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {};

export default function LoginForm({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
}
