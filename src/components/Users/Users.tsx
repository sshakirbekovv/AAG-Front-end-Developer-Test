import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Users.module.scss";
import { useUsers } from "../../redux/users/users.selector";
import { UserItems } from "./UserItems/UserItems";
import UserTable from "./UserTable/UserTable";
import { creaeteUserAction, deleteUserAction, getUsersAction, updateUserAction } from "../../redux/users/users.actions";
import { Button } from "react-bootstrap";
import ModalForm from "../ModalForm/ModalForm";

const Users: React.FC = () => {

  const [editId, setEditId] = useState<number>(0);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [optionName, setOptionName] = useState<any>("");
  const [platformName, setPlatformName] = useState<string>("");
  const [viewName, setViewName] = useState<string>("");
  const { users } = useUsers();
  const dispatch = useDispatch();
  const showHideClassName = openModal ? "display-block" : "display-none";
  const closeModal = openModal ? 'overlay-block' : 'overlay-none';

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  const createUserHandler = (e: any) => {
    e.preventDefault();
    dispatch(creaeteUserAction({ optionName, platformName, googleAccount: {viewName: viewName} }));
    setOpenModal(false);
  }

  const updateUserHandler = (e: any, id: number) => {
    e.preventDefault();
    dispatch(updateUserAction({ optionName, platformName, googleAccount: {viewName: viewName} }, id));
    setOpenModal(false);
  }

  const modalActiveCreate = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
    setModalCreate(true);
    setOptionName("");
    setPlatformName("");
    setViewName("");
  };

  const modalActiveEdit = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
    setModalCreate(false);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const deleteUserHandler = (id: number) => {
    dispatch(deleteUserAction(id));
  };

  return (
    <div className={styles.users}>
      <div className={closeModal} onClick={modalClose}></div>
       <div className={showHideClassName}>
          <ModalForm 
          optionName={optionName}
          setOptionName={setOptionName}
          platformName={platformName}
          setPlatformName={setPlatformName}
          viewName={viewName}
          setViewName={setViewName}
          onSubmit={(e: any) => {modalCreate ? createUserHandler(e) : updateUserHandler(e, editId)}}
          text={modalCreate ? "Save" : "Edit"}
          />
        </div>
      <header className={styles.users__header}>
        <Button 
        variant="success"
        onClick={modalActiveCreate}
        > Create a new user
        </Button>
      </header>
      <div className={styles.users__table}>
        <table>
          <thead>
            <tr>
              {UserItems.map((item) => (
                <th>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users && users.data.map((item) => (
              <UserTable 
                user={item} 
                onEdit={() => {
                  modalActiveEdit(); 
                  setEditId(item.rooftopGoogleOptionId);
                  setOptionName(item.optionName);
                  setPlatformName(item.platformName);
                  setViewName(item.googleAccount.viewName);
                }}
                onDelete={() => deleteUserHandler(item.rooftopGoogleOptionId)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
