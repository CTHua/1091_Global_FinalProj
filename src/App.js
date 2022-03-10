import React from "react";
import "./index.css";
import { List, Block } from "./Block";
import { Container, Row, Col, Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      List: List,
      DarkMode: false,
    };
  }
  onClick() {
    this.setState({
      List: List,
    });
    document.querySelector(".toBottom").click();
  }
  switch() {
    if (!this.state.DarkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      this.setState({ DarkMode: true });
      List[List.length - 1] *= -1;
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({ DarkMode: false });
      List[List.length - 1] *= -1;
    }
  }
  render() {
    let blockList = this.state.List;
    let num = 0;
    return (
      <Container>
        <br />
        <Row>
          <Col>
            <h3>歡迎光臨性別「平等」世界</h3>
          </Col>
          <Col>
            {!this.state.DarkMode ? (
              <Button variant="dark" style={{ float: "right" }} onClick={() => this.switch()}>
                Dark Mode
              </Button>
            ) : (
              <Button variant="light" style={{ float: "right" }} onClick={() => this.switch()}>
                Light Mode
              </Button>
            )}
          </Col>
        </Row>
        {blockList.map((now) => {
          if (now < 0) return <Block value={now * -1} lock={true} number={num++} dark={this.state.DarkMode}></Block>;
          else return <Block value={now} lock={false} func={() => this.onClick()} dark={this.state.DarkMode}></Block>;
        })}
        <div style={{ height: 0 }} display={"none"}>
          <a className="toBottom" name="1" href="#1" display={"none"}>
            {" "}
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  }
}
export default App;
