import { Menu, Container, Button } from "semantic-ui-react";
import { useStore } from "../stores/store";

function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu
      inverted
      fixed="top">
      <Container>
        <Menu.Item>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={() => activityStore.openForm()}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
