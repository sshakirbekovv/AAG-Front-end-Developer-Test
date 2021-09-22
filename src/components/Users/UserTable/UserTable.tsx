import React from "react";
import { Button } from "react-bootstrap";
import { Users } from "../../../types/user.types";

const UserTable: React.FC<{
  user: Users;
  onEdit?: () => void;
  onDelete?: () => void;
}> = ({ user, onEdit, onDelete }) => {

  return (
    <tr>
      <td>{user.googleId}</td>
      <td>{user.optionName}</td>
      <td>{user.platformName}</td>
      <td>{user.googleAccount.viewName}</td>
      <td>
        <Button variant="primary" onClick={onEdit}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UserTable;
