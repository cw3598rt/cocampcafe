import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import styled from "@emotion/styled";
import Footer from "./footer/footer";
import { useRouter } from "next/router";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SideBarBox = styled.div`
  position: absolute;
  top: 8em;
  right: 10em;
`;
const Contents = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 2em;
  position: relative;
`;
const ISHIDDENSIDEBAR = ["/signup"];
export default function Layout(props) {
  const router = useRouter();
  const isHiddenSideBar = ISHIDDENSIDEBAR.includes(router.asPath);
  return (
    <Wrapper>
      <Header />
      {!isHiddenSideBar && (
        <SideBarBox>
          <Sidebar />
        </SideBarBox>
      )}
      <Contents>{props.children}</Contents>
      <Footer />
    </Wrapper>
  );
}
