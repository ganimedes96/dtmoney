import React,{useContext} from "react";
import incomeImg from "../../assets/income.svg";
import autcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionContext";
import { Container } from "./styles";





export function Summary() {
  
  const {transactions} = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="entrada" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>sainda</p>
          <img src={autcomeImg} alt="Sainda" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className='light-background'>
        <header>
          <p>total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
