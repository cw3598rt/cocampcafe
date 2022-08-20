import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useEffect } from "react";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
      createdAt
    }
  }
`;
export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    Auth.toPromise()
      .then(async (newAccessToken) => {
        setAccessToken(newAccessToken);
        const result = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          },
        });
        setUserInfo(result.data.fetchUserLoggedIn);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },

    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
