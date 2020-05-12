import React, {Component} from 'react';

const API = 'AIzaSyC7ajb3qzrBRr4E9mzZ85iHbMKzJGKgk-Y'
const channelID = 'UCdmO-zG8p3fN_qZDwS9_n3A'
const result = 5;
const playlistId = 'OLAK5uy_mAWxeOHR1Vk1QbLM81k2wTBalzXEVrtLQ'
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`;
 



class Moses extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      < div>
        <button onClick={this.clicked}>Get youtube videos</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="Moses"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Moses;