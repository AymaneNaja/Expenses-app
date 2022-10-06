
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ExpenseProvider from "./ExpenseContext";


function App() {
return (    

  <div className="Expense-App">
  <ExpenseProvider>
     <Header/>
     <Main/>
      <Footer/> 

  </ExpenseProvider>
  

  </div>
    );
}

export default App;
