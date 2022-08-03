import type { NextPage } from "next";
import Head from "next/head";
import { prisma } from "../db/client";
import { trpc } from "../utils/trpc";

// export default function Home() {}

const QuestionCreator = () => {
  const { mutate } = trpc.useMutation("questions.create");

  return (
    <input
      onSubmit={(event) => {
        console.log("value?", event.currentTarget.value);
      }}
    ></input>
  );
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["questions.get-all"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">Questions</div>
        {data[0]?.question}
      </div>
      <QuestionCreator />
    </div>
  );
};

export default Home;
