import styled from 'styled-components';

// Shared by Rating and Q&A
const Button = styled.button`
  appearance: none;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 0.8em;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin: 5px;
  width: 200px;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    cursor: pointer;
  }
`;

const MiniButton = styled(Button)`
  padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  font-size: small;
  font-weight: 400;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  width: auto;
  // color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;
const ClickableText = styled.button`
  background-color: transparent;
  border: none;
  padding: 0!important;
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
  // color: #444;
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
`;

export {
  Button, ClickableText, Modal, ModalParent, ModalClose, MiniButton,
};
