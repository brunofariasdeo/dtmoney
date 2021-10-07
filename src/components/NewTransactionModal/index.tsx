import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
    const { createTransaction } = useTransactions();

    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        onRequestClose();
    };

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Título"
                    value={title}
                />
                <input
                    onChange={event => setAmount(Number(event.target.value))}
                    placeholder="Valor"
                    type="number"
                    value={amount}
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
                    onChange={event => setCategory(event.target.value)}
                    placeholder="Categoria"
                    value={category}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}