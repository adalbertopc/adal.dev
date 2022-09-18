import { Link } from "~/components";

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl font-bold">Page not found</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
}
