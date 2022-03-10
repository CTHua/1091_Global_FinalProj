import { Col, Row, Button, Image } from "react-bootstrap";
import Text from "./Text";

var List = [1];
var Clicked = [];
function Block(props) {
  let text = Text[props.value];
  let lock = props.lock;
  let func = props.func;
  let number = props.number;
  let dark = props.dark ? "white" : "";
  function _1() {
    for (let i = 0; i < List.length; i++) List[i] = List[i] < 0 ? List[i] : List[i] * -1;
    console.log(List);
    return (
      <div>
        <Row>
          <Col>
            <Button
              variant={Clicked[number] === 0 ? "secondary" : "outline-secondary"}
              block
              onClick={() => {
                func();
                List.push(text.to[0]);
                Clicked.push(0);
              }}
              disabled={lock ? true : false}
              style={{ color: dark }}
            >
              {text.opt[0]}
            </Button>
          </Col>
          <Col>
            <Button
              variant={Clicked[number] === 1 ? "secondary" : "outline-secondary"}
              block
              onClick={() => {
                func();
                List.push(text.to[1]);
                Clicked.push(1);
              }}
              disabled={lock ? true : false}
              style={{ color: dark }}
            >
              {text.opt[1]}
            </Button>
          </Col>
        </Row>
        <br />
        {/* if number of options > 2 then display all 4 button*/}
        <Row>
          <Col>
            {text.opt.length > 2 && (
              <Button
                variant={Clicked[number] === 2 ? "secondary" : "outline-secondary"}
                block
                onClick={() => {
                  func();
                  List.push(text.to[2]);
                  Clicked.push(2);
                }}
                disabled={lock ? true : false}
                style={{ color: dark }}
              >
                {text.opt[2]}
              </Button>
            )}
          </Col>
          <Col>
            {text.opt.length > 3 && (
              <Button
                variant={Clicked[number] === 3 ? "secondary" : "outline-secondary"}
                block
                onClick={() => {
                  func();
                  List.push(text.to[3]);
                  Clicked.push(3);
                }}
                disabled={lock ? true : false}
                style={{ color: dark }}
              >
                {text.opt[3]}
              </Button>
            )}
          </Col>
        </Row>
      </div>
    );
  }

  function relife() {
    for (let i = 0; i < List.length; i++) List[i] = List[i] < 0 ? List[i] : List[i] * -1;
    return (
      <Row>
        <Col>
          <Button
            variant={Clicked[number] === 0 ? "secondary" : "outline-secondary"}
            block
            onClick={() => {
              func();
              List.push(text.to[0]);
              Clicked.push(0);
            }}
            disabled={lock ? true : false}
            style={{ color: dark }}
          >
            {text.opt[0]}
          </Button>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={12}>
        <br />
        <h3>{text.title}</h3>
        {text.img !== "" && (
          <Image alt={"140x140"} src={text.img} style={{ display: "block", margin: "auto", width: "50%" }} />
        )}
        {text.destrubte.map((item) => (
          <p>{item}</p>
        ))}
        {text.reading && (
          <a href={text.reading} target="_blank" rel="noreferrer noopener">
            延伸閱讀 <br />
          </a>
        )}
        <br />
        {/* if it dead(only have one option) then display 1 button */}
        {text.to.length === 1 ? relife() : _1()}
        <br />
      </Col>
      <div style={{ height: "50px" }}></div>
    </Row>
  );
}

export { Block, List };
