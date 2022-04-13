import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalParent, ModalClose } from '../../../contexts/Shared.styled';



export default function Alert({ message }) {
  return (
    <ModalParent>
      <Modal>
        <ModalClose>

        </ModalClose>
      </Modal>
    </ModalParent>
  )
}