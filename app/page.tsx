import SignOutButton from "@/components/SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Welcome {session.user.name} 🍰</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src={session.user.image!} alt="User Picture" />
                <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              {session.user.email}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <SignOutButton />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
