open BsReactNative;

[@bs.val] external alert : string => unit = "alert";
[@bs.val] external random : float = "Math.random";

type myToken = string;

type action = | GenerateToken;

type state = {
  token: myToken
};

let chunk = () => [%bs.raw {|Math.random().toString(36).substring(7)|}]
let randomString = () => chunk()++"-"++chunk();

module Styles = {
  open Style;

  let container =
    style([
      flex(2.),
      flexDirection(RowReverse),
      justifyContent(Center),
      alignItems(Center),
      backgroundColor(String("#3399FF")),
    ]);

  let text =
    style([
      color(String("#fff")),
      fontSize(Float(24.)),
      margin(Pt(10.))
    ]);
};

module Token = {
  let component = ReasonReact.reducerComponent("Token");

  let make = _children => {
    ...component,
    initialState: () => {
      token: "init token"
    },
    reducer: (action, {token}) =>
      switch action {
	| 
	  GenerateToken => {
	    ReasonReact.Update({
	      token: randomString()
            })
          }
    },
    render: ({state: {token}, send}) => 
      <View style=Styles.container>
	<Button
	  color="#00BB72"
	  title="Generate Toke"
	  onPress=(() => send(GenerateToken))
	/>
        <Text style=Styles.text>
	    (ReasonReact.string(token))
        </Text>
      </View>,
  };
};
