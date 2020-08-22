import * as React from 'react';
import Head from "next/head";
import { Button, Content } from "@adobe/react-spectrum";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Button variant="cta">This is button yes</Button>
      </Content>
    </>
  );
}
