import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    const [type, setType] = useState('deposit'); 

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
                <TransactionTypeContainer>
                    <RadioBox
                        activeColor="green"
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit'); }}
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        activeColor="red"
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw'); }}
                        type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
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