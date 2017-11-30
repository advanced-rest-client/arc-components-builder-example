import React, { Component } from 'react';
import './App.css';
import {PaperCombobox, ContentTypeSelector, HeadersEditor, HttpMethodSelector, UrlInputEditor} from './arc-components';

class App extends Component {

  constructor(props) {
    super(props);
    // In Polymer 1.0 `undefined` does not triggers change
    this.state = {
      source: ['Apple', 'Apricot', 'Avocado',
      'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
      'Boysenberry', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya',
      'Cloudberry', 'Coconut', 'Cranberry', 'Damson', 'Date', 'Dragonfruit',
      'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry',
      'Grape', 'Grapefruit', 'Guava', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
      'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon',
      'Lime', 'Loquat', 'Lychee', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit',
      'Mulberry', 'Nectarine', 'Olive', 'Orange'],
      contentType: 'application/json'
    };
    this._onQuery = this._onQuery.bind(this);
    this._onContentTypeChanged = this._onContentTypeChanged.bind(this);
    this._isPayloadChanged = this._isPayloadChanged.bind(this);
    this._onUrlHistoryQuery = this._onUrlHistoryQuery.bind(this);
    this._onCombValueChanged = this._onCombValueChanged.bind(this);
  }

  _onQuery(detail, e) {
    console.log('Combobox query handled', detail, e.target, e.path);
  }

  _onCombValueChanged(value) {
    console.log('Combobox value changed to ', value);
  }

  _onContentTypeChanged(value) {
    if (typeof value !== 'string') {
      return;
    }
    if (this.state.contentType === value) {
      return;
    }
    this.setState({
      contentType: value
    });
  }

  _isPayloadChanged(value) {
    if (this.state.isPayload === value) {
      return;
    }
    this.setState({
      isPayload: value
    });
  }

  _onUrlHistoryQuery(detail, e) {
    e.preventDefault();
    detail.result = Promise.resolve([{
      'url': 'https://handled-url-event.com/'
    }]);
  }

  render() {
    return (
      <div className="App">
        <h1>ARC components as React components</h1>
        <h2>PaperCombobox example</h2>
        <PaperCombobox label="Test" source={this.state.source} onQuery={this._onQuery} onValueChanged={this._onCombValueChanged}/>

        <h2>Request editor elements example</h2>
        <div className="url-editor">
          <HttpMethodSelector onIsPayloadChanged={this._isPayloadChanged}/>
          <UrlInputEditor onUrlHistoryQuery={this._onUrlHistoryQuery}/>
        </div>
        <ContentTypeSelector onContentTypeChanged={this._onContentTypeChanged} contentType={this.state.contentType}/>
        <HeadersEditor contentType={this.state.contentType} isPayload={this.state.isPayload}/>
      </div>
    );
  }
}

export default App;
