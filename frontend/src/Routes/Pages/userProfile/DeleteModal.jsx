// import React, { useState } from 'react'
// import {
//     AlertDialog,
//     AlertDialogBody,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogContent,
//     AlertDialogOverlay,
//     AlertDialogCloseButton, useDisclosure, Button, useToast
// } from '@chakra-ui/react'
// import style from '../CSS/DashboardComponent.module.css'
// import axios from 'axios'
// import { APP_URL } from '../Constants/Constants'
// import { useDispatch } from 'react-redux'
// import { getAllUserDetails } from '../Redux/AllUserReducer/action'

// export const DeleteModal = ({ id }) => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const cancelRef = React.useRef()
//     const toast = useToast()
//     const dispatch = useDispatch();

//     // STATE TO HANDLE DELETE LOADING

//     const [deleteLoading, setDeleteLoading] = useState(false)
   

//     // FUNCTION WHEN USER CLICKS ON DELETE BUTTON TO DELETE USER CREDENTIALS

//     const deleteUserHandler = () => {
//         setDeleteLoading(true)
//         axios.delete(`${APP_URL}/users/${id}`)
//             .then((res) => {
//                 console.log(res);
//                 setDeleteLoading(false)
//                 dispatch(getAllUserDetails())
//                 toast({
//                     description: "Deleted Successfull",
//                     status: 'success',
//                     duration: 4000,
//                     isClosable: true,
//                 })

//             })
//             .catch((err)=>{
//                 toast({
//                     description: `${err.message}`,
//                     status: 'error',
//                     duration: 4000,
//                     isClosable: true,
//                 })
//             })
//     }


//     return (
//         <div>
//             <Button onClick={onOpen}
//                 variant={'none'}
//                 className={style.deleteButton}
//             >Delete</Button>
//             <AlertDialog
//                 motionPreset='slideInBottom'
//                 leastDestructiveRef={cancelRef}
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 isCentered
//             >
//                 <AlertDialogOverlay />

//                 <AlertDialogContent>
//                     <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
//                     <AlertDialogCloseButton />
//                     <AlertDialogBody>
//                         Are you sure you want to Delete the User ? Once Deleted cannot be restored
//                     </AlertDialogBody>
//                     <AlertDialogFooter>
//                         <Button ref={cancelRef} onClick={onClose}>
//                             No
//                         </Button>
//                         <Button colorScheme='red' ml={3}
//                             onClick={deleteUserHandler}
//                             isLoading={deleteLoading}
//                         >
//                             Yes
//                         </Button>
//                     </AlertDialogFooter>
//                 </AlertDialogContent>
//             </AlertDialog>
//         </div>
//     )
// }
