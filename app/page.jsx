import { AuthForm } from "@/components/auth-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Home({ searchParams }) {
  const formMode = await searchParams.mode || "login";

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm mode={formMode} />
      </div>
    </div>
  );

  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
