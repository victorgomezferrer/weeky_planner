import React, { useContext, useEffect, useState } from "react";
import Heart from "react-animated-heart";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import userService from "../../services/user.service";
import { AuthContext } from "../../contexts/AuthContext";

export default function LikeButton({ recipe }) {

    let { label, uri } = recipe



    const [isClick, setClick] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [usuario, setUsuario] = useState({});
    const { user, getToken } = useContext(AuthContext)




    const toggleModal = () => {

        setModalIsOpen(!modalIsOpen);
    };

    const handleLikeClick = async () => {
        setClick(!isClick);
        let data = {
            label: label,
            uri: uri
        };
        if (isClick) {
            // const buscar_id = user.user.favoriteRecipes.find((r) => { if (r.uri == uri) return r._id })
            // console.log(buscar_id);
            // const results = await userService.dislikeRecipe(getToken())
            console.log('receta borrada con exito')
        } else {
            const results = await userService.likeRecipe(getToken(), data)
            console.log(results, 'receta like enviada bien')
        }
        toggleModal();
    };


    const checkLikeRecipe = () => {
        if (user && user.recipe && user.recipe.hits) {
            const likedUris = user.recipe.hits.find(({ recipe }) => {
                if (recipe.uri === uri) return console.log('COINCIDENCIA', uri, recipe.uri), setClick(!isClick)
            });
        }
    };




    useEffect(() => {
        if (user) checkLikeRecipe()
    }, [user]);


    return (
        <div className="App">
            <Heart isClick={isClick} onClick={handleLikeClick} />
            <Modal isOpen={modalIsOpen} onClose={toggleModal} size="sm">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{isClick ? ('¡Receta añadida con éxito a tus favoritos!') : ('Receta quitada de favoritos')}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Button colorScheme="blue" onClick={toggleModal}>
                            Cerrar
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

