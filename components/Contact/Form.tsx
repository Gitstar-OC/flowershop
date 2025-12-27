"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  website: string;
  companySize: string | undefined;
  message: string;
  newsletter: boolean;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const inputClass =
  "w-full h-10 rounded-[10px] border-none [box-shadow:0_1px_2px_-1px_rgba(15,15,15,0.10),0_0_0_1px_rgba(15,15,15,0.10)]";
const textareaClass =
  "w-full min-h-32 rounded-[10px] border-none border px-3 py-2 focus-visible:ring-2 focus-visible:ring-blue-200 [box-shadow:0_1px_2px_-1px_rgba(15,15,15,0.10),0_0_0_1px_rgba(15,15,15,0.10)]";
const labelClass = "input-label text-[#666]";
const errorClass = "text-xs text-red-500";
const fieldGapClass = "flex flex-col gap-3"; // Gap between label and input container
const sectionGapClass = "space-y-6";

type ContactFormProps = {
  onSubmit: (data: FormValues) => Promise<boolean>;
};

const Form = ({ onSubmit }: ContactFormProps) => {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    website: "",
    companySize: undefined,
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");

    if (!validate()) {
      console.log("VALIDATION FAILED");
      return;
    }

    setIsSubmitting(true);
    const success = await onSubmit(values);
    setIsSubmitting(false);

    if (success) {
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        website: "",
        companySize: undefined,
        message: "",
        newsletter: false,
      });
      toast.success("Message sent successfully!", { className: `${inputClass} !bg-[#0088ff] !text-white` });
    } else {
      toast.error("Failed to send message. Please try again.", { className: "!bg-red-500 text-white rounded-[10px] shadow-sm" });
    }
  };

  const validate = () => {
    const newErrors: Errors = {};
    (Object.keys(values) as (keyof FormValues)[]).forEach((key) => {
      if (key !== "newsletter" && !values[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValid =
    values.firstName &&
    values.lastName &&
    values.email &&
    values.companyName &&
    values.website &&
    values.companySize &&
    values.message;

  return (
    <form className={sectionGapClass} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(["firstName", "lastName"] as const).map((field) => (
          <div key={field} className={fieldGapClass}>
            <Label className={cn(labelClass, "capitalize")}>
              {field.replace("Name", " Name")} *
            </Label>
            <div className="flex flex-col gap-2">
              <Input
                name={field}
                value={values[field]}
                onChange={handleChange}
                className={cn(
                  inputClass,
                  errors[field] && "border-red-400 focus-visible:ring-red-200"
                )}
              />
              {errors[field] && <p className={errorClass}>{errors[field]}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(["email", "companyName"] as const).map((field) => (
          <div key={field} className={fieldGapClass}>
            <Label className={cn(labelClass, "capitalize")}>
              {field === "companyName" ? "Company Name" : "Email"} *
            </Label>
            <div className="flex flex-col gap-2">
              <Input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={values[field]}
                onChange={handleChange}
                className={cn(
                  inputClass,
                  errors[field] && "border-red-400 focus-visible:ring-red-200"
                )}
              />
              {errors[field] && <p className={errorClass}>{errors[field]}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Website + Company Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={fieldGapClass}>
          <Label className={labelClass}>Website *</Label>
          <div className="flex flex-col gap-2">
            <Input
              name="website"
              value={values.website}
              onChange={handleChange}
              className={cn(
                inputClass,
                errors.website && "border-red-400 focus-visible:ring-red-200"
              )}
            />
            {errors.website && <p className={errorClass}>{errors.website}</p>}
          </div>
        </div>

        <div className={fieldGapClass}>
          <Label className={labelClass}>Company Size *</Label>
          <div className="flex flex-col gap-2">
            <Select
              value={values.companySize}
              onValueChange={(v) => {
                setValues({ ...values, companySize: v });
                setErrors({ ...errors, companySize: "" });
              }}
            >
              <SelectTrigger
                id="company-size-select"
                className={cn(
                  inputClass,
                  errors.companySize && "border-red-400"
                )}
              >
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1–10 employees</SelectItem>
                <SelectItem value="11-50">11–50 employees</SelectItem>
                <SelectItem value="51-200">51–200 employees</SelectItem>
                <SelectItem value="201-500">201–500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
            {errors.companySize && (
              <p className={errorClass}>{errors.companySize}</p>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className={fieldGapClass}>
        <Label className={labelClass}>What can we help you with? *</Label>
        <div className="flex flex-col gap-2">
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            className={cn(textareaClass, errors.message && "border-red-400")}
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-[#666]">
        <input
          type="checkbox"
          checked={values.newsletter}
          onChange={(e) =>
            setValues({ ...values, newsletter: e.target.checked })
          }
          className="accent-blue-500 mt-1"
        />
        Get the latest tips, tricks and trends in your inbox.
      </label>

      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-30 h-9 mini-text"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
