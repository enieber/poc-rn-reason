// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Text$BsReactNative = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");

var container = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(2),
      /* :: */[
        Style$BsReactNative.justifyContent(/* Center */2),
        /* :: */[
          Style$BsReactNative.alignItems(/* Center */2),
          /* :: */[
            Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#333"])),
            /* [] */0
          ]
        ]
      ]
    ]);

var text = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.color(/* String */Block.__(0, ["#fff"])),
      /* :: */[
        Style$BsReactNative.fontSize(/* Float */Block.__(0, [24])),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* container */container,
  /* text */text
];

var component = ReasonReact.statelessComponent("Main");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(text), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Hello Zen Health"]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Main = /* module */[
  /* component */component,
  /* make */make
];

exports.Styles = Styles;
exports.Main = Main;
/* container Not a pure module */