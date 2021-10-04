import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    return (
        <Modal 
            className="react-modal-content"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
        >
            <button 
                className="react-modal-close"
                onClick={onRequestClose}
                type="button" 
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                />
                <input
                    placeholder="Valor"
                    type="number"
                />
                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}