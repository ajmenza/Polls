import type { NextPage } from "next";
import Head from "next/head";
import { prisma } from "../db/client";
import { trpc } from "../utils/trpc";

// export default function Home() {}

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["questions.get-all"]);

  if (isLoading || !data) return <div>Loading...</div>;

  console.log(data);
  

  return <div>{data[0]?.question}</div>;
};


export default Home;
