import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  useToast,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import axios from "axios";

import { Tooltip } from "@chakra-ui/react";
import { appUrl } from "../../Constants/Constant";

export const EditModal = ({
  email,
  password,
  profileImage,
  userName,
  phoneNumber,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageUrl, setImageUrl] = useState("");

  // STATES TO TOGGLE BETWEEN ICONS WHEN USER CLICKS ON EDIT ICON
  const [editUserName, setEditUserName] = useState("");
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [editUserFirstName, setEditUserFirstName] = useState(false);
  const [editUserLastName, setEditUserLastName] = useState(false);
  const [editUserEmail, setEditUserEmail] = useState(false);
  const [editUserDepartment, setEditUserDepartment] = useState(false);

  // STATES TO SAVE DATA WHEN USER EDITS EXISTING DATA

  const [saveFirstname, setSaveFirstName] = useState(false);
  const [saveLastName, setSaveLastName] = useState(false);
  const [saveEmail, setSaveEmail] = useState(false);
  const [saveDepartment, setSaveDepartment] = useState(false);

  const toast = useToast();

  const fileInput = React.createRef();

  // USESELECTOR TO DESTRUCTURE PROPERTIES FROM REDUX STORE FROM EditUserReducer

  //FUNCTION TO HANDLE WHEN USER IS DONE WITH EDITING AND SUBMIT THE FORM

  const editHandler = () => {
    // let updateInfo = {
    //     firstName: saveFirstname ? editFirstName : firstName,
    //     lastName: saveLastName ? editLastName : lastName,
    //     email: saveEmail ? editEmail : email,
    //     department: saveDepartment ? editDepartment : department
    // }

    // console.log("updateInfo", updateInfo)
    let data = {};

    const formData = new FormData();

    if (fileInput.current.files.length > 0) {
      formData.append("userImage", fileInput.current.files[0]);
      console.log(fileInput.current.files[0], "))))))");
      console.log(formData);
      data.image = formData;
    }

    console.log(formData);
    console.log(userEmail, editUserName);

    if (userEmail) {
      // formData.firstName = firstName
      formData.append("email", userEmail);
    }

    if (editUserName) {
      // formData.firstName = firstName
      formData.append("userName", editUserName);
    }

    // if (state) {
    //     // data.state = state
    //     formData.append("state", state);
    // }

    // if (city) {
    //     // data.city = city
    //     formData.append("city", city);
    // }

    // if (password) {
    //     // data.password = password
    //     formData.append("password", password);
    // }

    const token = localStorage.getItem("Token");
    console.log(token);
    // const headers = {
    //     Authorization: `${token}`,
    // };

    axios
      .patch(`${appUrl}/user/uploads`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log("isED", editIsLoading);

  // FUNCTION TO HANDLE WHEN USER CLCKS ON EDIT MODAL CLOSE ICON TO RESET THE STATES

  const closeEditModal = () => {
    setEditUserFirstName(false);
    setEditUserLastName(false);
    setEditUserEmail(false);
    setEditUserDepartment(false);

    setSaveFirstName(false);
    setSaveLastName(false);
    setSaveEmail(false);
    setSaveDepartment(false);
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    // console.log("Files", file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // Set imageUrl in your component's state or wherever it's needed
      // console.log("imageUrl");
      // console.log(imageUrl);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div>
      <Button onClick={onOpen} variant={"none"}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClick={closeEditModal} />
        <ModalContent>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <form onSubmit={""}>
                <FormControl mt={1}>
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="file"
                    name="userImage"
                    ref={fileInput}
                    onChange={onChange}
                    borderRadius={"20px"}
                    variant={"none"}
                    // width={'20%'}
                    enctype="multipart/form-data"
                  />
                </FormControl>

                <InputGroup>
                  <FormControl mt={1}>
                    <FormLabel>User Name</FormLabel>
                    {editUserFirstName || saveFirstname ? (
                      <Input
                        type="text"
                        placeholder="User Name"
                        // value={editUserFirstName}
                        // value={userName}
                        value={editUserName}
                        disabled={saveFirstname}
                        onChange={(e) => {
                          setEditUserName(e.target.value);
                        }}
                      />
                    ) : (
                      <Input
                        type="text"
                        placeholder="First Name"
                        value={userName}
                        isDisabled
                      />
                    )}
                  </FormControl>

                  <InputRightElement width="4.5rem">
                    {!editUserFirstName && (
                      <Tooltip
                        hasArrow
                        label="Edit"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<EditIcon />}
                          onClick={() => {
                            setEditUserFirstName(true);
                            setSaveFirstName(false);
                          }}
                        />
                      </Tooltip>
                    )}

                    {editUserFirstName && (
                      <Tooltip
                        hasArrow
                        label="save"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<CheckIcon />}
                          onClick={() => {
                            setSaveFirstName(true);
                            setEditUserFirstName(false);
                          }}
                        />
                      </Tooltip>
                    )}

                    {editUserFirstName && (
                      <Tooltip
                        hasArrow
                        label="discard"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<SmallCloseIcon />}
                          onClick={() => {
                            setEditUserFirstName(false);
                          }}
                        />
                      </Tooltip>
                    )}
                  </InputRightElement>
                </InputGroup>

                <InputGroup>
                  <FormControl mt={1}>
                    <FormLabel>Email</FormLabel>
                    {editUserEmail || saveEmail ? (
                      <Input
                        type="text"
                        placeholder="Email"
                        value={userEmail}
                        disabled={saveEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                      />
                    ) : (
                      <Input
                        type="text"
                        placeholder="Email"
                        value={email}
                        isDisabled
                      />
                    )}
                  </FormControl>

                  <InputRightElement width="4.5rem">
                    {!editUserEmail && (
                      <Tooltip
                        hasArrow
                        label="Edit"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<EditIcon />}
                          onClick={() => {
                            setEditUserEmail(true);
                            setSaveEmail(false);
                          }}
                        />
                      </Tooltip>
                    )}

                    {editUserEmail && (
                      <Tooltip
                        hasArrow
                        label="save"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<CheckIcon />}
                          onClick={() => {
                            setSaveEmail(true);
                            setEditUserEmail(false);
                          }}
                        />
                      </Tooltip>
                    )}

                    {editUserEmail && (
                      <Tooltip
                        hasArrow
                        label="discard"
                        bg="gray.300"
                        color="black"
                      >
                        <IconButton
                          variant={"none"}
                          h="1.75rem"
                          size="sm"
                          icon={<SmallCloseIcon />}
                          onClick={() => {
                            setEditUserEmail(false);
                          }}
                        />
                      </Tooltip>
                    )}
                  </InputRightElement>
                </InputGroup>
              </form>

              <div style={{ marginTop: "10px" }}>
                <p>
                  <span style={{ marginRight: "5px" }}>Note***</span> Before
                  Saving details save the details using <CheckIcon /> Icon to
                  save the particular details{" "}
                </p>
              </div>

              <div>
                <Button
                  // className={style.submitBtn}
                  variant={"solid"}
                  // isLoading={editIsLoading}
                  w={"full"}
                  mt={6}
                  onClick={editHandler}
                  // colorScheme={editIsLoading ? 'blue' : 'blue'}
                >
                  Save Details
                </Button>
              </div>
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
