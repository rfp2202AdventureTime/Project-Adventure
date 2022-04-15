import styled from 'styled-components';

// Shared by Rating and Q&A
const Button = styled.button`
  border: 2px solid;
  text-align: center;
  padding: 1.3rem 1rem 1.3rem 1rem;
  font-size: medium;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.button};
  &:hover {
    background-color:${({ theme }) => theme.colors.tertiary};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  }
`;

const MiniButton = styled(Button)`
  padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  font-size: small;
  font-weight: 400;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;
const ClickableText = styled.button`
  background-color: transparent;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;

const ModalParent = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9996;
  display: ${({ showModal }) => (showModal ? 'block' : 'none')};
  opacity: ${({ showModal }) => (showModal ? 1 : 0)};
  pointer-events: disabled;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
`;

const Modal = styled.div`
  z-index: 9997;
  background-position: center;
  width: 60%;
  height: 60%;
  position: relative;
  margin: 10% auto;
  color: #444;
  background-image: ${({ modal, theme }) => (modal ? `url(${modal})` : theme.colors.primary)};
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.light};
  background-size: 100% auto%;
  visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
  }
`;
const ModalClose = styled.div`
  position: fixed;
  color: white;
  line-height: 50px;
  font-size: 2rem;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  z-index: 9998;
  cursor: pointer;
  &:hover {
    color: #000;
  }

`;

export {
  Button, ClickableText, Modal, ModalParent, ModalClose, MiniButton,
};
