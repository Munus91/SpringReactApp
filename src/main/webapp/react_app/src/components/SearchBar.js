import React from 'react';

class SearchBar extends React.Component {

    state={
        term:'',
        label_caption:"Введите номер карты",
        result_of_check:"None",
        data_base_cards:[]
    };


    card_state={card_num:'',pin_code:'',balance:''}

    //получение и вывод статуса проверки карты
    async  get_check_card_status()
    {

        const response_get = await fetch('http://localhost:8080/api/credit_cards/validatecard?' +
            new URLSearchParams({
                card_number: this.state.term
            })


        );

        const data = await response_get.text();
        this.setState({result_of_check:data});

    }

    //обработчик отправки формы
    onFormSubmit= (event)=>
    {
        event.preventDefault();//отключается стандартное действие компонента
        this.get_check_card_status();

    }


    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>{this.state.label_caption}</label>
                        <br />
                        <input  type="text"
                                value={this.state.term}
                                onChange={(e)=>this.setState({term: e.target.value})}
                        />
                        <br />
                        <input  type="button"
                                value="1"
                                onClick={(e)=>this.setState({term: this.state.term+"1"})}
                        />
                        <input  type="button"
                                value="2"
                                onClick={(e)=>this.setState({term: this.state.term+"2"})}
                        />
                        <input  type="button"
                                value="3"
                                onClick={(e)=>this.setState({term: this.state.term+"3"})}
                        />

                        <input  type="submit"
                                value="Enter"
                                onClick={async (e)=> {
                                    //запись номера карты в переменную
                                    this.setState({term: this.state.term,result_of_check:"OK"});
                                    this.card_state.card_num = this.state.term;


                                    const response_post = await fetch('http://localhost:8080/api/credit_cards', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'

                                        },
                                        body: JSON.stringify({
                                            "card_number": this.card_state.card_num

                                        })
                                    });


                                    const data = await response_post.json();
                                    this.setState({data_base_cards: data});


                                }//onClick function ends


                                }//onClick block ends

                        />
                        <br />
                        <input  type="button"
                                value="4"
                                onClick={(e)=>this.setState({term: this.state.term+"4"})}
                        />
                        <input  type="button"
                                value="5"
                                onClick={(e)=>this.setState({term: this.state.term+"5"})}
                        />
                        <input  type="button"
                                value="6"
                                onClick={(e)=>this.setState({term: this.state.term+"6"})}
                        />

                        <input  type="reset"
                                value="Reset"
                                onClick={()=>{window.location.reload();}}
                        />
                        <br />
                        <input  type="button"
                                value="7"
                                onClick={(e)=>this.setState({term: this.state.term+"7"})}
                        />
                        <input  type="button"
                                value="8"
                                onClick={(e)=>this.setState({term: this.state.term+"8"})}
                        />
                        <input  type="button"
                                value="9"
                                onClick={(e)=>this.setState({term: this.state.term+"9"})}
                        />
                        <br />
                        <input  type="button"
                                value="CE"
                                onClick={(e)=>this.setState({term: ''})}
                        />
                        <input  type="button"
                                value="0"
                                onClick={(e)=>{this.setState({term: this.state.term+"0"});
                                }}
                        />
                        <input  type="button"
                                value="<"
                                onClick={(e)=>this.setState({term: this.state.term.slice(0,-1)})}
                        />

                    </div>
                </form>

                <h2>Result:</h2>
                <label id="result_label"> {this.state.result_of_check} </label>
            </div>
        );
    }
}

export default SearchBar;

