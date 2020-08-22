import * as React from "react";
import {
  Provider,
  defaultTheme,
  Header,
  Footer,
  Image,
  Grid,
  View,
  Flex,
  Link,
} from "@adobe/react-spectrum";
import "../styles/_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={["header header", "page page", "footer footer"]}
        columns={["1fr"]}
        autoRows="size-1000"
      >
        <Header gridArea="header">
          <Flex
            width="100%"
            height="100%"
            maxWidth="1440px"
            margin="0 auto"
            alignItems="center"
            columnGap="size-100"
          >
            <Image
              src="/logo.png"
              alt="Geta logo"
              width={"size-400"}
              height={"size-400"}
            />
            <nav>
              <Link>
                <a href="#">Somewhere nowehere</a>
              </Link>
            </nav>
          </Flex>
        </Header>
        <View gridArea="page">
          <Component {...pageProps} />
        </View>
        <Footer gridArea="footer">No copyright as of now.</Footer>
      </Grid>
    </Provider>
  );
}

export default MyApp;
