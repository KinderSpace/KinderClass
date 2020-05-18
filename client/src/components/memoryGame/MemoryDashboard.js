import React from "react";
import shuffle from "../../services/tuttiFrutti";
import axios from "axios";
import PopUpWin from "../tuttiFrutti/PopUpWin";
import GreetingMessage from "../tuttiFrutti/GreetingMessage";
import { Redirect } from "react-router-dom";

class MemoryDashboard extends React.Component {
  state = {
    cards: [],
    firstCard: "",
    showGoodMessage: false,
    rights: 0,
    redirect: false,
  };
  getCards = () => {
    axios.get("/api/games/tutti-frutti").then((cardsFound) => {
      let allTheCards = shuffle(cardsFound.data.cards.slice(0, 4));
      allTheCards = shuffle([...allTheCards, ...allTheCards]).map((card, i) => {
        return { ...card, clicked: false, key: i };
      });
      this.setState({
        cards: allTheCards,
      });
    });
  };
  handleRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  componentDidMount = () => {
    this.getCards();
  };

  handleClick = (e, card) => {
    card.hidden = true;
    card.clicked = true;
    let aux;
    let message;

    /// Necesitamos tener en algun lado las cartas q deberia mostrarse
    /// Primera opcion: En un array. Pusheamos la primera carta y dsp pusheamos la segunda por un segundo y dsp borramos las dos
    /// Seungda opcion: Tenemos un string con la primera carta e indefectiblemente la segunda se muestre. Y luego igual q antes
    /// Si hacemos click. Pusheamos esa carta en una variable
    // Si la carta se encuentra en esa variable, se muestra. Sino se oculta
    if (!this.state.firstCard.name) {
      aux = card;
    } else if (
      card.name === this.state.firstCard.name &&
      card.key != this.state.firstCard.key
    ) {
      setTimeout(() => {
        aux = "";
      }, 1000);
      message = true;
      this.setState({
        rights: this.state.rights + 1,
      });
    } else {
      setTimeout(() => {
        aux = "";
      }, 1000);
    }
    if (this.state.rights === 3) {
      message = false;
    }
    this.setState({
      firstCard: aux,
      showGoodMessage: message,
    });
    setTimeout(
      function () {
        this.setState({ showGoodMessage: false });
      }.bind(this),
      2000
    );
  };

  cardStyle = {
    display: "none",
  };

  render() {
    return (
      <div>
        {this.state.rights === 4 && (
          <div className="congratulations">
            <PopUpWin buttonMethod={this.handleRedirect} />
          </div>
        )}
        <div className="congratulations">
          {this.state.showGoodMessage && <GreetingMessage />}
        </div>
        <div className="dashBoard">
          {this.state.cards.map((card, i) => {
            return (
              <div className="containerCard" key={i}>
                <img
                  style={card.hidden ? this.cardStyle : {}}
                  className="wrongImg"
                  // src={card.image}
                  src={card.clicked ? card.image : {}}
                  onClick={(e) => {
                    this.handleClick(e, card);
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* {this.state.redirect && <Redirect to="/games" />} */}
      </div>
    );
  }
}
export default MemoryDashboard;
