"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var Column_1 = require("./Column");
var Card_1 = require("./Card");
var App = function () {
    return (<styles_1.AppContainer>
      <Column_1.Column text="To Do">
        <Card_1.Card text="Genereate app Scaffold"/>
      </Column_1.Column>
      <Column_1.Column text="In Progress">
        <Card_1.Card text="Learn Typescript"/>
      </Column_1.Column>
      <Column_1.Column text="Done">
        <Card_1.Card text="Begin to use static typing"/>
      </Column_1.Column>
    </styles_1.AppContainer>);
};
exports["default"] = App;
