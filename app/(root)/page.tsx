import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl  font-black text-primary-500">Welcome to the world of next.js</h1>
      <h1 className="font-space-grotesk text-3xl font-black text-primary-500">
        Welcome to the world of next.js
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}>
        <Button type="submit">log out</Button>
      </form>
    </>
  );
};

export default Home;
