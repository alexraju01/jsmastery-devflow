import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-black text-primary-500">Welcome to the world of next.js</h1>
    </>
  );
};

export default Home;
