import { Menu, Container, Button } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

function NavBar({ openForm }: Props) {
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
            onClick={openForm}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
