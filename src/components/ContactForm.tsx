"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
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
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";
// import { PiSmiley,  } from "react-icons/pi";

const FormSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  job_title: z.string().min(2, "Job title must be at least 2 characters"),
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
  // help: z.enum([
  //   "Evaluate Bird for my company",
  //   "Learn More",
  //   "Get a Quote",
  //   "Other",
  // ]),
  // services: z.enum([
  //   "Mobile App Development",
  //   "Social Media Marketing",
  //   "UI/UX Design",
  //   "Branding",
  //   "Website Development",
  // ]),
  info: z.string().max(500, "Message cannot exceed 500 characters"),
  terms: z.boolean().refine((val) => val, "You must accept the terms"),
});

type FormValues = z.infer<typeof FormSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      // help: "Learn More",
      // services: "Social Media Marketing",
      info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-md py-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <PiCheckLight className="text-3xl text-green-600" />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Thank you for contacting us
          </h3>
          <p className="text-gray-600">
            We've received your inquiry and will respond to you via email within
            24 hours. For urgent matters, please call our support line at (123)
            456-7890.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-2xl space-y-6 rounded-xl border  p-8 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact Our Team
          </h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  First name *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Shehroz"
                    className="focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Last name *
                </FormLabel>
                <FormControl className="text-slate-400">
                  <Input
                    {...field}
                    placeholder="Tariq"
                    className="focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Email *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="shehroztariq.dev@gmail.com"
                  className="focus:ring-2 focus:ring-blue-500 text-white"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="job_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Job title *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g. Marketing Director"
                    className="focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
                  Company name *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your company"
                    className="focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Services you're interested in *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue
                          placeholder="Select a service"
                          className="text-white"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Mobile App Development">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="Social Media Marketing">
                        Social Media Marketing
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Branding">Branding</SelectItem>
                      <SelectItem value="Website Development">
                        Website Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    How can we help? *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Evaluate Bird for my company">
                        Evaluate Bird for my company
                      </SelectItem>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
          </div> */}

        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Additional information
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tell us more about your project or inquiry"
                  className="min-h-[120px] focus:ring-2 focus:ring-blue-500 text-white"
                />
              </FormControl>
              <FormDescription className="text-xs text-gray-500">
                Maximum 500 characters
              </FormDescription>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-gray-300 data-[state=checked]:bg-blue-600"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal text-gray-700">
                  I agree to receive marketing communications from Bird and
                  acknowledge that I have read and accept the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </div>

        <p className="text-xs text-gray-500">
          * Required fields. We respect your privacy. Your information will not
          be shared with third parties.
        </p>
      </form>
    </Form>
  );
}
