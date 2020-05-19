import React, { Component } from "react";
import axios from "axios";
//import { HorizontalBar } from "react-chartjs-2";
import Search from "./Search";
import { Bar } from "react-chartjs-2";

let timer;

export default class Stats extends Component {
  state = {
    query: "",
    game: "",
    allData: "",
    category: "",
    date: 5184000000,
  };

  componentDidMount = () => {
    this.getAllData();
  };

  getAllData = () => {
    axios.get("/api/stats").then((gotUsers) => {
      this.setState({
        allData: gotUsers.data.users.map((user) => {
          user.originalMatches = user.matches.slice(0);
          return user;
        }),
      });
    });
  };

  filteredData = (allData) => {
    const dataSet = {
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
    //Create array of users
    const userArray = allData.map((el) => {
      return el.username;
    });
    //Update data
    dataSet.labels = userArray;
    //Get array of average scores
    //Access each users matches
    const scoreArray = allData.map((user) => {
      return (
        //Return average of all scores
        user.matches.reduce((acc, curVal) => {
          return acc + curVal.score;
        }, 0) / user.matches.length || 0
      );
    });
    //Update scores
    dataSet.datasets[0].data = scoreArray;
    return dataSet;
  };

  setQuery = (query) => {
    this.setState({ query: query });
  };

  handleFilters = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    if (!this.state.allData) {
      return <div>Loading...</div>;
    }
    const filteredKids = this.state.allData
      .filter((user) => {
        return (
          user.username.includes(this.state.query) && user.role !== "teacher"
        );
      })
      .map((kid) => {
        kid.matches = kid.originalMatches.filter((match) => {
          return (
            match.game.includes(this.state.game) &&
            match.category.includes(this.state.category) &&
            new Date(match.date_played).getTime() >=
              new Date().getTime() - this.state.date
          );
        });
        return kid;
      });
    const newDataSet = this.filteredData(filteredKids);
    return (
      <div>
        <h1>Kids average score on the educational games</h1>
        <Search
          {...this.state}
          setQuery={this.setQuery}
          handleFilters={this.handleFilters}
        />
        <Bar
          data={newDataSet}
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
