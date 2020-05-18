import React, { Component } from "react";
import axios from "axios";
//import { HorizontalBar } from "react-chartjs-2";
import Search from "./Search";
import { Bar } from "react-chartjs-2";

let timer;
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Scores",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default class Stats extends Component {
  state = {
    data: data,
    query: "",
    game: "",
  };

  componentDidMount = () => {
    this.getData(this.state.query, this.state.game);
  };

  getData = (query, game) => {
    axios.get(`/api/stats?query=${query}&game=${game}`).then((gotUsers) => {
      //Create array of users
      const userArray = gotUsers.data.users.map((el) => {
        return el.username;
      });
      //Update data
      data.labels = userArray;
      //Get array of average scores
      //Access each users matches
      const scoreArray = gotUsers.data.users.map((user) => {
        return (
          //Return average of all scores
          user.matches.reduce((acc, curVal) => {
            return acc + curVal.score;
          }, 0) / user.matches.length || 0
        );
      });
      //Update scores
      data.datasets[0].data = scoreArray;
      this.setState({
        data: data,
      });
    });
  };

  setQuery = (query) => {
    //Frenar si hay algun timeout
    clearTimeout(timer);
    this.setState({ query: query });
    //Hacer un nuevo timeout y si se cumple hacer lo siguiente =>
    timer = setTimeout(() => {
      this.getData(this.state.query, this.state.game);
    }, 1000);
  };

  handleFilters = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.getData(this.state.query, this.state.game);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Kids average score on the educational games</h1>
        <Search
          {...this.state}
          setQuery={this.setQuery}
          handleFilters={this.handleFilters}
        />
        <Bar
          data={this.state.data}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
