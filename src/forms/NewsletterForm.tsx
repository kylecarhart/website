import { buttonVariants } from "@/components/button/ButtonVariants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.carh.art/api/v1/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      setError("root", {
        message: "Failed to subscribe. Please try again later.",
      });
    }
  };

  return (
    <>
      {isSubmitSuccessful ? (
        <p className="font-semibold my-4">Thank you for subscribing! 🎉</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 my-6"
        >
          <div className="flex gap-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="border border-white rounded-full px-4 py-2 flex-1"
            />
            <button className={buttonVariants({ variant: "primary" })}>
              Sign up
            </button>
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          {errors.root && (
            <span className="text-red-500 text-sm">{errors.root.message}</span>
          )}
        </form>
      )}
    </>
  );
}
