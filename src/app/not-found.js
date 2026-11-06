import Button from "@/components/button.tsx";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">
        どうやらあなたはIT班に参加するべきようです
      </h1>
      <p className="text-lg text-gray-600">404 Not Found</p>
      <Button href="/" className="mt-4">
        Home
      </Button>
    </div>
  );
}
