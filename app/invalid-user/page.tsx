import GoogleSignInButton from "@/components/GoogleSignInButton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Invalid User</CardTitle>
            <CardDescription>You must use a valid CKL account</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <GoogleSignInButton />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
