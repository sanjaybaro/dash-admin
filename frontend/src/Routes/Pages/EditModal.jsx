import React, { useRef, useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel,
    FormErrorMessage, FormHelperText, Select, useToast, Input, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react'

// import { EditIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons'
// import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// import style from '../CSS/DashboardComponent.module.css'
// import { editUserDepartmentAction, editUserEmailAddressAction, editUserFirstNameAction, editUserLastNameAction, editUserResetAction, saveUserEditedDetails } from '../Redux/EditUserReducer/action'
import { Tooltip, } from '@chakra-ui/react'



export const EditModal = ({ id, firstName, lastName, email, department }) => {

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

    
    


    return (
        <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
