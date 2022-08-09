import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import styled from "@emotion/styled";
import Footer from "./footer/footer";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
const SideBarBox = styled.div`
  position: absolute;
  top: 8em;
  right: 10em;
`;
export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <SideBarBox>
        <Sidebar />
      </SideBarBox>
      <div>{props.children}</div>
      <Footer />
    </Wrapper>
  );
}
