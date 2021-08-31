import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import './index.css';


class App extends React.Component {

    state = {
        clients: []
    };


    renderTableHeader() {
        let header = ["Card Number","Pin Code","Balance"];
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.clients.map((client, index) => {
            const { id, cardNum, pinCode, balance } = client //destructuring
            return (
                <tr key={id}>
                    <td>{cardNum}</td>
                    <td>{pinCode}</td>
                    <td>{balance}</td>
                </tr>
            )
        })
    }


    async componentDidMount() {

       try {
           const response = await fetch('http://localhost:8080/api/credit_cards', {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json'
               }

           });
           const data = await response.json();
           this.setState({clients: data})


       }catch (Exc)
       {
           alert("Catched Exception:"+Exc);

       }
    }

    render(){

        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar />
                <br />

                <div>

                    <p>Данные из таблицы для проверки наличия карты с введённым номером в базе</p>

                    <table bgcolor="#e0ffff" border="2">
                        <tbody>

                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}

                        </tbody>

                    </table>


                </div>


            </div>



        );
    }

};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')


);


