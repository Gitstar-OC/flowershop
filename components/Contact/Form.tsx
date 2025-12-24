"use client";

import { useState } from "react";
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

type Errors = Partial<Record<string, string>>;

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    website: "",
    companySize: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Errors = {};
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "newsletter" && !value) {
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
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
    >
      {/* Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["firstName", "lastName"].map((field) => (
          <div key={field} className="space-y-2">
            <Label className="input-label text-[#666] capitalize">
              {field.replace("Name", " Name")} *
            </Label>
            <Input
              name={field}
              value={(values as any)[field]}
              onChange={handleChange}
              className={cn(
                "h-12 rounded-xl",
                errors[field] && "border-red-400 focus-visible:ring-red-200"
              )}
            />
            {errors[field] && (
              <p className="text-xs text-red-500">{errors[field]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["email", "companyName"].map((field) => (
          <div key={field} className="space-y-2">
            <Label className="input-label text-[#666] capitalize">
              {field === "companyName" ? "Company Name" : "Email"} *
            </Label>
            <Input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={(values as any)[field]}
              onChange={handleChange}
              className={cn(
                "h-12 rounded-xl",
                errors[field] && "border-red-400 focus-visible:ring-red-200"
              )}
            />
            {errors[field] && (
              <p className="text-xs text-red-500">{errors[field]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Website + Company Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="input-label text-[#666]">Website *</Label>
          <Input
            name="website"
            value={values.website}
            onChange={handleChange}
            className={cn(
              "h-12 rounded-xl",
              errors.website && "border-red-400 focus-visible:ring-red-200"
            )}
          />
          {errors.website && (
            <p className="text-xs text-red-500">{errors.website}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="input-label text-[#666]">Company Size *</Label>
          <Select
            onValueChange={(v) => {
              setValues({ ...values, companySize: v });
              setErrors({ ...errors, companySize: "" });
            }}
          >
            <SelectTrigger
              className={cn(
                "h-12 rounded-xl",
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
            <p className="text-xs text-red-500">{errors.companySize}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label className="input-label text-[#666]">
          What can we help you with? *
        </Label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className={cn(
            "w-full min-h-[120px] rounded-xl border px-3 py-2 focus-visible:ring-2 focus-visible:ring-blue-200",
            errors.message && "border-red-400"
          )}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Newsletter */}
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

      {/* Submit */}
      <div className="pt-4 flex justify-center">
        <Button
          type="submit"
          disabled={!isValid}
          className="px-10 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-40"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
