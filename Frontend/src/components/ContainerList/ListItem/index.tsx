import React from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

import { Container } from "./styles";

interface ListItemProps {
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ name }) => {
  return (
    <Container>
      <div className="list-item-title">{name}</div>

      <div className="icons">
        <button type="button">
          <BiPencil size={24} />
        </button>

        <button type="button">
          <BiTrash size={24} />
        </button>
      </div>
    </Container>
  );
};

export { ListItem };
