import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import styled from "@emotion/styled";
import Footer from "./footer/footer";

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
export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <SideBarBox>
        <Sidebar />
      </SideBarBox>
      <Contents>{props.children}</Contents>
      <Footer />
    </Wrapper>
  );
}
