import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const getStaticProps: GetStaticProps = async () => {
  const { NODE_ENV } = process.env;

  const isDev = NODE_ENV === "development";
  return {
    props: { isDev },
  };
};

const Docs: NextPage = ({
  isDev,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  useEffect(() => {
    if (!isDev) router.push("/404");
  }, [isDev]);

  return <SwaggerUI url="/swagger.json" />;
};

export default Docs;
