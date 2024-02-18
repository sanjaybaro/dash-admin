import React, { useRef, useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel,
    FormErrorMessage, FormHelperText, Select, useToast, Input, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react'
import { EditIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons'



import { Tooltip, } from '@chakra-ui/react'



export const EditModal = ({ email, password, profileImage, userName, phoneNumber}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    
    // STATES TO TOGGLE BETWEEN ICONS WHEN USER CLICKS ON EDIT ICON 

    const [editUserFirstName, setEditUserFirstName] = useState(false);
    const [editUserLastName, setEditUserLastName] = useState(false)
    const [editUserEmail, setEditUserEmail] = useState(false)
    const [editUserDepartment, setEditUserDepartment] = useState(false)
    

    // STATES TO SAVE DATA WHEN USER EDITS EXISTING DATA

    const [saveFirstname, setSaveFirstName] = useState(false);
    const [saveLastName, setSaveLastName] = useState(false);
    const [saveEmail, setSaveEmail] = useState(false)
    const [saveDepartment, setSaveDepartment] = useState(false)

    
    const toast = useToast()



    
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
        

    }

    // console.log("isED", editIsLoading);
    
    // FUNCTION TO HANDLE WHEN USER CLCKS ON EDIT MODAL CLOSE ICON TO RESET THE STATES

    const closeEditModal = ()=>{
        setEditUserFirstName(false)
        setEditUserLastName(false)
        setEditUserEmail(false)
        setEditUserDepartment(false)

        setSaveFirstName(false)
        setSaveLastName(false)
        setSaveEmail(false)
        setSaveDepartment(false)

    }


    return (
        <div>
            <Button onClick={onOpen}
                variant={'none'}

               
            >Edit</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay onClick={closeEditModal}/>
                <ModalContent>
                    <ModalHeader>Edit Details</ModalHeader>
                    <ModalCloseButton  />
                    <ModalBody>


                        <div>
                            <form onSubmit={''}>


                                <FormControl mt={1}>
                                    <FormLabel>Image</FormLabel>
                                    <Input type='file'    />
                                </FormControl>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>User Name</FormLabel>
                                        {editUserFirstName || saveFirstname ? (
                                            <Input
                                                type="text"
                                                placeholder="User Name"
                                                // value={editFirstName}
                                                // value={userName}
                                                disabled={saveFirstname}
                                                // onChange={(e) => { dispatch(editUserFirstNameAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="First Name" value={userName} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        {!editUserFirstName && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => {
                                                    setEditUserFirstName(true)
                                                    setSaveFirstName(false)

                                                }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserFirstName && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={() => {
                                                    setSaveFirstName(true)
                                                    setEditUserFirstName(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserFirstName && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                    variant={'none'}
                                                    h="1.75rem"
                                                    size="sm"
                                                    icon={<SmallCloseIcon />}
                                                    onClick={() => {
                                                        setEditUserFirstName(false)
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    </InputRightElement>

                                </InputGroup>


                                {/* <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Password</FormLabel>
                                        {editUserLastName || saveLastName ? (
                                            <Input
                                                type="text"
                                                placeholder="Last Name"
                                                // value={editLastName}
                                                disabled={saveLastName}
                                                // onChange={(e) => { dispatch(editUserLastNameAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="Password" value={lastName} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        {!editUserLastName && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => {
                                                    setEditUserLastName(true)
                                                    setSaveLastName(false)

                                                }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserLastName && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={() => {
                                                    setSaveLastName(true)
                                                    setEditUserLastName(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserLastName && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                    variant={'none'}
                                                    h="1.75rem"
                                                    size="sm"
                                                    icon={<SmallCloseIcon />}
                                                    onClick={() => {
                                                        setEditUserLastName(false)
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    </InputRightElement>
                                </InputGroup> */}


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Email</FormLabel>
                                        {editUserEmail || saveEmail ? (
                                            <Input
                                                type="text"
                                                placeholder="Email"
                                                // value={editEmail}
                                                disabled={saveEmail}
                                                // onChange={(e) => { dispatch(editUserEmailAddressAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="Email" value={email} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        {!editUserEmail && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => {
                                                    setEditUserEmail(true)
                                                    setSaveEmail(false)

                                                }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserEmail && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={() => {
                                                    setSaveEmail(true)
                                                    setEditUserEmail(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserEmail && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                    variant={'none'}
                                                    h="1.75rem"
                                                    size="sm"
                                                    icon={<SmallCloseIcon />}
                                                    onClick={() => {
                                                        setEditUserEmail(false)
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    </InputRightElement>

                                </InputGroup>


                            </form>

                            <div style={{ marginTop: '10px' }}>
                                <p><span style={{ marginRight: '5px' }}>Note***</span> Before Saving details save the details using <CheckIcon /> Icon to save the particular details  </p>
                            </div>

                            <div>
                                <Button
                                    // className={style.submitBtn}
                                    variant={'solid'}
                                    // isLoading={editIsLoading}
                                    w={'full'}
                                    mt={6}
                                    onClick={editHandler}
                                    // colorScheme={editIsLoading ? 'blue' : 'blue'}

                                >
                                    Save Details
                                </Button>
                            </div>
                        </div>


                    </ModalBody>

                    <ModalFooter>


                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
