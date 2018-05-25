import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Boyer",
      prenom: "Julien",
      ville: "Lyon",
      adresse: "8 Rue de la Charité",
      gps: {
        long: 4.832868,
        lat: 45.755685
      },
      chanteurs: ["JUL", "Maitre Gims", "PNL"],
      url:
        "https://culturebox.francetvinfo.fr/sites/default/files/assets/images/2017/12/julmaxppp.jpg",
      site: "https://tinder.com/"
    };
  }
  render() {
    return (
      <div>
        <h3>
          {this.state.nom} {this.state.prenom}{" "}
          {this.props.age > 15 ? this.props.age : "JUL est trop jeune"} ans
        </h3>
        <ul>{this.state.chanteurs.map(user => <li>{user}</li>)}</ul>
        <img style={{ width: "200px" }} src={this.state.url} />
        <a href={this.state.site}>{this.state.site}</a>
      </div>
    );
  }
}

export default Display;
