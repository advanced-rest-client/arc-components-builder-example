import React from 'react';

export class ContentTypeSelector extends React.Component {

	constructor(props) {
		super(props);
		this._contentTypeChangedEvent = this._contentTypeChangedEvent.bind(this);
		this._onContentTypeChanged = this._onContentTypeChanged.bind(this);
	}

	componentDidMount() {
		this._refElement.addEventListener('content-type-changed', this._contentTypeChangedEvent);
		if (this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (this.props.contentType) {
			this._refElement.contentType = this.props.contentType;
		}
		this._refElement.addEventListener('content-type-changed', this._onContentTypeChanged);
		if (this.props.selected) {
			this._refElement.selected = this.props.selected;
		}
	}

	componentWillUnmount() {
		this._refElement.removeEventListener('content-type-changed', this._contentTypeChangedEvent);
		this._refElement.removeEventListener('content-type-changed', this._onContentTypeChanged);
	}

	componentDidUpdate(pp) {
		if (pp.eventsTarget !== this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (pp.contentType !== this.props.contentType) {
			this._refElement.contentType = this.props.contentType;
		}
		if (pp.selected !== this.props.selected) {
			this._refElement.selected = this.props.selected;
		}
	}

	_contentTypeChangedEvent(e) {
		if (this.props.onContentTypeChanged) {
			this.props.onContentTypeChanged(e.detail, e);
		}
	}

	_onContentTypeChanged(e) {
		if (this.props.onContentTypeChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onContentTypeChanged(value, e);
		}
	}

	render() {
		return (
			<div>
				<content-type-selector
				  ref={(element) => {this._refElement = element;}}/>
			</div>
		);
	}
}

export class PaperCombobox extends React.Component {

	constructor(props) {
		super(props);
		this._ironFormElementRegisterEvent = this._ironFormElementRegisterEvent.bind(this);
		this._ironFormElementUnregisterEvent = this._ironFormElementUnregisterEvent.bind(this);
		this._valueChangedEvent = this._valueChangedEvent.bind(this);
		this._focusedChangedEvent = this._focusedChangedEvent.bind(this);
		this._disabledChangedEvent = this._disabledChangedEvent.bind(this);
		this._changeEvent = this._changeEvent.bind(this);
		this._invalidChangedEvent = this._invalidChangedEvent.bind(this);
		this._queryEvent = this._queryEvent.bind(this);
		this._onValueChanged = this._onValueChanged.bind(this);
		this._onFocusedChanged = this._onFocusedChanged.bind(this);
		this._onInvalidChanged = this._onInvalidChanged.bind(this);
	}

	componentDidMount() {
		this._refElement.addEventListener('iron-form-element-register', this._ironFormElementRegisterEvent);
		this._refElement.addEventListener('iron-form-element-unregister', this._ironFormElementUnregisterEvent);
		this._refElement.addEventListener('value-changed', this._valueChangedEvent);
		this._refElement.addEventListener('focused-changed', this._focusedChangedEvent);
		this._refElement.addEventListener('disabled-changed', this._disabledChangedEvent);
		this._refElement.addEventListener('change', this._changeEvent);
		this._refElement.addEventListener('invalid-changed', this._invalidChangedEvent);
		this._refElement.addEventListener('query', this._queryEvent);
		if (this.props.name) {
			this._refElement.name = this.props.name;
		}
		if (this.props.value) {
			this._refElement.value = this.props.value;
		}
		this._refElement.addEventListener('value-changed', this._onValueChanged);
		if (this.props.required) {
			this._refElement.required = this.props.required;
		}
		this._refElement.addEventListener('focused-changed', this._onFocusedChanged);
		if (this.props.disabled) {
			this._refElement.disabled = this.props.disabled;
		}
		if (this.props.keyEventTarget) {
			this._refElement.keyEventTarget = this.props.keyEventTarget;
		}
		if (this.props.stopKeyboardEventPropagation) {
			this._refElement.stopKeyboardEventPropagation = this.props.stopKeyboardEventPropagation;
		}
		if (this.props.keyBindings) {
			this._refElement.keyBindings = this.props.keyBindings;
		}
		if (this.props.label) {
			this._refElement.label = this.props.label;
		}
		if (this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		this._refElement.addEventListener('invalid-changed', this._onInvalidChanged);
		if (this.props.preventInvalidInput) {
			this._refElement.preventInvalidInput = this.props.preventInvalidInput;
		}
		if (this.props.allowedPattern) {
			this._refElement.allowedPattern = this.props.allowedPattern;
		}
		if (this.props.type) {
			this._refElement.type = this.props.type;
		}
		if (this.props.list) {
			this._refElement.list = this.props.list;
		}
		if (this.props.pattern) {
			this._refElement.pattern = this.props.pattern;
		}
		if (this.props.errorMessage) {
			this._refElement.errorMessage = this.props.errorMessage;
		}
		if (this.props.charCounter) {
			this._refElement.charCounter = this.props.charCounter;
		}
		if (this.props.noLabelFloat) {
			this._refElement.noLabelFloat = this.props.noLabelFloat;
		}
		if (this.props.alwaysFloatLabel) {
			this._refElement.alwaysFloatLabel = this.props.alwaysFloatLabel;
		}
		if (this.props.autoValidate) {
			this._refElement.autoValidate = this.props.autoValidate;
		}
		if (this.props.validator) {
			this._refElement.validator = this.props.validator;
		}
		if (this.props.autocomplete) {
			this._refElement.autocomplete = this.props.autocomplete;
		}
		if (this.props.autofocus) {
			this._refElement.autofocus = this.props.autofocus;
		}
		if (this.props.inputmode) {
			this._refElement.inputmode = this.props.inputmode;
		}
		if (this.props.minlength) {
			this._refElement.minlength = this.props.minlength;
		}
		if (this.props.maxlength) {
			this._refElement.maxlength = this.props.maxlength;
		}
		if (this.props.min) {
			this._refElement.min = this.props.min;
		}
		if (this.props.max) {
			this._refElement.max = this.props.max;
		}
		if (this.props.step) {
			this._refElement.step = this.props.step;
		}
		if (this.props.placeholder) {
			this._refElement.placeholder = this.props.placeholder;
		}
		if (this.props.readonly) {
			this._refElement.readonly = this.props.readonly;
		}
		if (this.props.size) {
			this._refElement.size = this.props.size;
		}
		if (this.props.autocapitalize) {
			this._refElement.autocapitalize = this.props.autocapitalize;
		}
		if (this.props.autocorrect) {
			this._refElement.autocorrect = this.props.autocorrect;
		}
		if (this.props.autosave) {
			this._refElement.autosave = this.props.autosave;
		}
		if (this.props.results) {
			this._refElement.results = this.props.results;
		}
		if (this.props.accept) {
			this._refElement.accept = this.props.accept;
		}
		if (this.props.multiple) {
			this._refElement.multiple = this.props.multiple;
		}
		if (this.props.opened) {
			this._refElement.opened = this.props.opened;
		}
		if (this.props.source) {
			this._refElement.source = this.props.source;
		}
		if (this.props.inputElement) {
			this._refElement.inputElement = this.props.inputElement;
		}
		if (this.props.tabindex) {
			this._refElement.tabindex = this.props.tabindex;
		}
	}

	componentWillUnmount() {
		this._refElement.removeEventListener('iron-form-element-register', this._ironFormElementRegisterEvent);
		this._refElement.removeEventListener('iron-form-element-unregister', this._ironFormElementUnregisterEvent);
		this._refElement.removeEventListener('value-changed', this._valueChangedEvent);
		this._refElement.removeEventListener('focused-changed', this._focusedChangedEvent);
		this._refElement.removeEventListener('disabled-changed', this._disabledChangedEvent);
		this._refElement.removeEventListener('change', this._changeEvent);
		this._refElement.removeEventListener('invalid-changed', this._invalidChangedEvent);
		this._refElement.removeEventListener('query', this._queryEvent);
		this._refElement.removeEventListener('value-changed', this._onValueChanged);
		this._refElement.removeEventListener('focused-changed', this._onFocusedChanged);
		this._refElement.removeEventListener('invalid-changed', this._onInvalidChanged);
	}

	componentDidUpdate(pp) {
		if (pp.name !== this.props.name) {
			this._refElement.name = this.props.name;
		}
		if (pp.value !== this.props.value) {
			this._refElement.value = this.props.value;
		}
		if (pp.required !== this.props.required) {
			this._refElement.required = this.props.required;
		}
		if (pp.focused !== this.props.focused) {
			this._refElement.focused = this.props.focused;
		}
		if (pp.disabled !== this.props.disabled) {
			this._refElement.disabled = this.props.disabled;
		}
		if (pp.keyEventTarget !== this.props.keyEventTarget) {
			this._refElement.keyEventTarget = this.props.keyEventTarget;
		}
		if (pp.stopKeyboardEventPropagation !== this.props.stopKeyboardEventPropagation) {
			this._refElement.stopKeyboardEventPropagation = this.props.stopKeyboardEventPropagation;
		}
		if (pp.keyBindings !== this.props.keyBindings) {
			this._refElement.keyBindings = this.props.keyBindings;
		}
		if (pp.label !== this.props.label) {
			this._refElement.label = this.props.label;
		}
		if (pp.invalid !== this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		if (pp.preventInvalidInput !== this.props.preventInvalidInput) {
			this._refElement.preventInvalidInput = this.props.preventInvalidInput;
		}
		if (pp.allowedPattern !== this.props.allowedPattern) {
			this._refElement.allowedPattern = this.props.allowedPattern;
		}
		if (pp.type !== this.props.type) {
			this._refElement.type = this.props.type;
		}
		if (pp.list !== this.props.list) {
			this._refElement.list = this.props.list;
		}
		if (pp.pattern !== this.props.pattern) {
			this._refElement.pattern = this.props.pattern;
		}
		if (pp.errorMessage !== this.props.errorMessage) {
			this._refElement.errorMessage = this.props.errorMessage;
		}
		if (pp.charCounter !== this.props.charCounter) {
			this._refElement.charCounter = this.props.charCounter;
		}
		if (pp.noLabelFloat !== this.props.noLabelFloat) {
			this._refElement.noLabelFloat = this.props.noLabelFloat;
		}
		if (pp.alwaysFloatLabel !== this.props.alwaysFloatLabel) {
			this._refElement.alwaysFloatLabel = this.props.alwaysFloatLabel;
		}
		if (pp.autoValidate !== this.props.autoValidate) {
			this._refElement.autoValidate = this.props.autoValidate;
		}
		if (pp.validator !== this.props.validator) {
			this._refElement.validator = this.props.validator;
		}
		if (pp.autocomplete !== this.props.autocomplete) {
			this._refElement.autocomplete = this.props.autocomplete;
		}
		if (pp.autofocus !== this.props.autofocus) {
			this._refElement.autofocus = this.props.autofocus;
		}
		if (pp.inputmode !== this.props.inputmode) {
			this._refElement.inputmode = this.props.inputmode;
		}
		if (pp.minlength !== this.props.minlength) {
			this._refElement.minlength = this.props.minlength;
		}
		if (pp.maxlength !== this.props.maxlength) {
			this._refElement.maxlength = this.props.maxlength;
		}
		if (pp.min !== this.props.min) {
			this._refElement.min = this.props.min;
		}
		if (pp.max !== this.props.max) {
			this._refElement.max = this.props.max;
		}
		if (pp.step !== this.props.step) {
			this._refElement.step = this.props.step;
		}
		if (pp.placeholder !== this.props.placeholder) {
			this._refElement.placeholder = this.props.placeholder;
		}
		if (pp.readonly !== this.props.readonly) {
			this._refElement.readonly = this.props.readonly;
		}
		if (pp.size !== this.props.size) {
			this._refElement.size = this.props.size;
		}
		if (pp.autocapitalize !== this.props.autocapitalize) {
			this._refElement.autocapitalize = this.props.autocapitalize;
		}
		if (pp.autocorrect !== this.props.autocorrect) {
			this._refElement.autocorrect = this.props.autocorrect;
		}
		if (pp.autosave !== this.props.autosave) {
			this._refElement.autosave = this.props.autosave;
		}
		if (pp.results !== this.props.results) {
			this._refElement.results = this.props.results;
		}
		if (pp.accept !== this.props.accept) {
			this._refElement.accept = this.props.accept;
		}
		if (pp.multiple !== this.props.multiple) {
			this._refElement.multiple = this.props.multiple;
		}
		if (pp.opened !== this.props.opened) {
			this._refElement.opened = this.props.opened;
		}
		if (pp.source !== this.props.source) {
			this._refElement.source = this.props.source;
		}
		if (pp.inputElement !== this.props.inputElement) {
			this._refElement.inputElement = this.props.inputElement;
		}
		if (pp.tabindex !== this.props.tabindex) {
			this._refElement.tabindex = this.props.tabindex;
		}
	}

	_ironFormElementRegisterEvent(e) {
		if (this.props.onIronFormElementRegister) {
			this.props.onIronFormElementRegister(e.detail, e);
		}
	}

	_ironFormElementUnregisterEvent(e) {
		if (this.props.onIronFormElementUnregister) {
			this.props.onIronFormElementUnregister(e.detail, e);
		}
	}

	_valueChangedEvent(e) {
		if (this.props.onValueChanged) {
			this.props.onValueChanged(e.detail, e);
		}
	}

	_focusedChangedEvent(e) {
		if (this.props.onFocusedChanged) {
			this.props.onFocusedChanged(e.detail, e);
		}
	}

	_disabledChangedEvent(e) {
		if (this.props.onDisabledChanged) {
			this.props.onDisabledChanged(e.detail, e);
		}
	}

	_changeEvent(e) {
		if (this.props.onChange) {
			this.props.onChange(e.detail, e);
		}
	}

	_invalidChangedEvent(e) {
		if (this.props.onInvalidChanged) {
			this.props.onInvalidChanged(e.detail, e);
		}
	}

	_queryEvent(e) {
		if (this.props.onQuery) {
			this.props.onQuery(e.detail, e);
		}
	}

	_onValueChanged(e) {
		if (this.props.onValueChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onValueChanged(value, e);
		}
	}

	_onFocusedChanged(e) {
		if (this.props.onFocusedChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onFocusedChanged(value, e);
		}
	}

	_onInvalidChanged(e) {
		if (this.props.onInvalidChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onInvalidChanged(value, e);
		}
	}

	addOwnKeyBinding(eventString, handlerName) {
		this._refElement.addOwnKeyBinding(eventString, handlerName);
	}

	removeOwnKeyBindings() {
		this._refElement.removeOwnKeyBindings();
	}

	keyboardEventMatchesKeys(event, eventString) {
		this._refElement.keyboardEventMatchesKeys(event, eventString);
	}

	inputElement() {
		this._refElement.inputElement();
	}

	validate() {
		this._refElement.validate();
	}

	updateValueAndPreserveCaret(newValue) {
		this._refElement.updateValueAndPreserveCaret(newValue);
	}

	open() {
		this._refElement.open();
	}

	render() {
		return (
			<div>
				<paper-combobox
				  ref={(element) => {this._refElement = element;}}/>
			</div>
		);
	}
}

export class HeadersEditor extends React.Component {

	constructor(props) {
		super(props);
		this._contentTypeChangedEvent = this._contentTypeChangedEvent.bind(this);
		this._requestHeadersChangedEvent = this._requestHeadersChangedEvent.bind(this);
		this._valueChangedEvent = this._valueChangedEvent.bind(this);
		this._narrowChangedEvent = this._narrowChangedEvent.bind(this);
		this._onValueChanged = this._onValueChanged.bind(this);
		this._onNarrowChanged = this._onNarrowChanged.bind(this);
	}

	componentDidMount() {
		this._refElement.addEventListener('content-type-changed', this._contentTypeChangedEvent);
		this._refElement.addEventListener('request-headers-changed', this._requestHeadersChangedEvent);
		this._refElement.addEventListener('value-changed', this._valueChangedEvent);
		this._refElement.addEventListener('narrow-changed', this._narrowChangedEvent);
		if (this.props.isPayload) {
			this._refElement.isPayload = this.props.isPayload;
		}
		if (this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (this.props.value) {
			this._refElement.value = this.props.value;
		}
		this._refElement.addEventListener('value-changed', this._onValueChanged);
		if (this.props.selected) {
			this._refElement.selected = this.props.selected;
		}
		if (this.props.contentType) {
			this._refElement.contentType = this.props.contentType;
		}
		if (this.props.narrow) {
			this._refElement.narrow = this.props.narrow;
		}
		this._refElement.addEventListener('narrow-changed', this._onNarrowChanged);
		if (this.props.narrowWidth) {
			this._refElement.narrowWidth = this.props.narrowWidth;
		}
		if (this.props.sourceMode) {
			this._refElement.sourceMode = this.props.sourceMode;
		}
		if (this.props.setsMode) {
			this._refElement.setsMode = this.props.setsMode;
		}
		if (this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		if (this.props.errorMessage) {
			this._refElement.errorMessage = this.props.errorMessage;
		}
		if (this.props.size) {
			this._refElement.size = this.props.size;
		}
	}

	componentWillUnmount() {
		this._refElement.removeEventListener('content-type-changed', this._contentTypeChangedEvent);
		this._refElement.removeEventListener('request-headers-changed', this._requestHeadersChangedEvent);
		this._refElement.removeEventListener('value-changed', this._valueChangedEvent);
		this._refElement.removeEventListener('narrow-changed', this._narrowChangedEvent);
		this._refElement.removeEventListener('value-changed', this._onValueChanged);
		this._refElement.removeEventListener('narrow-changed', this._onNarrowChanged);
	}

	componentDidUpdate(pp) {
		if (pp.isPayload !== this.props.isPayload) {
			this._refElement.isPayload = this.props.isPayload;
		}
		if (pp.eventsTarget !== this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (pp.value !== this.props.value) {
			this._refElement.value = this.props.value;
		}
		if (pp.selected !== this.props.selected) {
			this._refElement.selected = this.props.selected;
		}
		if (pp.contentType !== this.props.contentType) {
			this._refElement.contentType = this.props.contentType;
		}
		if (pp.narrow !== this.props.narrow) {
			this._refElement.narrow = this.props.narrow;
		}
		if (pp.narrowWidth !== this.props.narrowWidth) {
			this._refElement.narrowWidth = this.props.narrowWidth;
		}
		if (pp.sourceMode !== this.props.sourceMode) {
			this._refElement.sourceMode = this.props.sourceMode;
		}
		if (pp.setsMode !== this.props.setsMode) {
			this._refElement.setsMode = this.props.setsMode;
		}
		if (pp.invalid !== this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		if (pp.errorMessage !== this.props.errorMessage) {
			this._refElement.errorMessage = this.props.errorMessage;
		}
		if (pp.size !== this.props.size) {
			this._refElement.size = this.props.size;
		}
	}

	_contentTypeChangedEvent(e) {
		if (this.props.onContentTypeChanged) {
			this.props.onContentTypeChanged(e.detail, e);
		}
	}

	_requestHeadersChangedEvent(e) {
		if (this.props.onRequestHeadersChanged) {
			this.props.onRequestHeadersChanged(e.detail, e);
		}
	}

	_valueChangedEvent(e) {
		if (this.props.onValueChanged) {
			this.props.onValueChanged(e.detail, e);
		}
	}

	_narrowChangedEvent(e) {
		if (this.props.onNarrowChanged) {
			this.props.onNarrowChanged(e.detail, e);
		}
	}

	_onValueChanged(e) {
		if (this.props.onValueChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onValueChanged(value, e);
		}
	}

	_onNarrowChanged(e) {
		if (this.props.onNarrowChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onNarrowChanged(value, e);
		}
	}

	filterHeaders(headers) {
		this._refElement.filterHeaders(headers);
	}

	headersToString(headersArray) {
		this._refElement.headersToString(headersArray);
	}

	headersToJSON(headers) {
		this._refElement.headersToJSON(headers);
	}

	getContentType(headers) {
		this._refElement.getContentType(headers);
	}

	replaceHeaderValue(headers, name, value) {
		this._refElement.replaceHeaderValue(headers, name, value);
	}

	getHeaderError(input) {
		this._refElement.getHeaderError(input);
	}

	queryCurrentIsPayloadState() {
		this._refElement.queryCurrentIsPayloadState();
	}

	render() {
		return (
			<div>
				<headers-editor
				  ref={(element) => {this._refElement = element;}}/>
			</div>
		);
	}
}

export class HttpMethodSelector extends React.Component {

	constructor(props) {
		super(props);
		this._requestIsPayloadChangedEvent = this._requestIsPayloadChangedEvent.bind(this);
		this._requestMethodChangedEvent = this._requestMethodChangedEvent.bind(this);
		this._methodChangedEvent = this._methodChangedEvent.bind(this);
		this._isPayloadChangedEvent = this._isPayloadChangedEvent.bind(this);
		this._onMethodChanged = this._onMethodChanged.bind(this);
		this._onIsPayloadChanged = this._onIsPayloadChanged.bind(this);
	}

	componentDidMount() {
		this._refElement.addEventListener('request-is-payload-changed', this._requestIsPayloadChangedEvent);
		this._refElement.addEventListener('request-method-changed', this._requestMethodChangedEvent);
		this._refElement.addEventListener('method-changed', this._methodChangedEvent);
		this._refElement.addEventListener('is-payload-changed', this._isPayloadChangedEvent);
		if (this.props.method) {
			this._refElement.method = this.props.method;
		}
		this._refElement.addEventListener('method-changed', this._onMethodChanged);
		this._refElement.addEventListener('is-payload-changed', this._onIsPayloadChanged);
		if (this.props.methodMenuOpened) {
			this._refElement.methodMenuOpened = this.props.methodMenuOpened;
		}
		if (this.props.showCustom) {
			this._refElement.showCustom = this.props.showCustom;
		}
	}

	componentWillUnmount() {
		this._refElement.removeEventListener('request-is-payload-changed', this._requestIsPayloadChangedEvent);
		this._refElement.removeEventListener('request-method-changed', this._requestMethodChangedEvent);
		this._refElement.removeEventListener('method-changed', this._methodChangedEvent);
		this._refElement.removeEventListener('is-payload-changed', this._isPayloadChangedEvent);
		this._refElement.removeEventListener('method-changed', this._onMethodChanged);
		this._refElement.removeEventListener('is-payload-changed', this._onIsPayloadChanged);
	}

	componentDidUpdate(pp) {
		if (pp.method !== this.props.method) {
			this._refElement.method = this.props.method;
		}
		if (pp.isPayload !== this.props.isPayload) {
			this._refElement.isPayload = this.props.isPayload;
		}
		if (pp.methodMenuOpened !== this.props.methodMenuOpened) {
			this._refElement.methodMenuOpened = this.props.methodMenuOpened;
		}
		if (pp.showCustom !== this.props.showCustom) {
			this._refElement.showCustom = this.props.showCustom;
		}
	}

	_requestIsPayloadChangedEvent(e) {
		if (this.props.onRequestIsPayloadChanged) {
			this.props.onRequestIsPayloadChanged(e.detail, e);
		}
	}

	_requestMethodChangedEvent(e) {
		if (this.props.onRequestMethodChanged) {
			this.props.onRequestMethodChanged(e.detail, e);
		}
	}

	_methodChangedEvent(e) {
		if (this.props.onMethodChanged) {
			this.props.onMethodChanged(e.detail, e);
		}
	}

	_isPayloadChangedEvent(e) {
		if (this.props.onIsPayloadChanged) {
			this.props.onIsPayloadChanged(e.detail, e);
		}
	}

	_onMethodChanged(e) {
		if (this.props.onMethodChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onMethodChanged(value, e);
		}
	}

	_onIsPayloadChanged(e) {
		if (this.props.onIsPayloadChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onIsPayloadChanged(value, e);
		}
	}

	standardMethods() {
		this._refElement.standardMethods();
	}

	closeCustom() {
		this._refElement.closeCustom();
	}

	render() {
		return (
			<div>
				<http-method-selector
				  ref={(element) => {this._refElement = element;}}/>
			</div>
		);
	}
}

export class UrlInputEditor extends React.Component {

	constructor(props) {
		super(props);
		this._invalidChangedEvent = this._invalidChangedEvent.bind(this);
		this._ironFormElementRegisterEvent = this._ironFormElementRegisterEvent.bind(this);
		this._ironFormElementUnregisterEvent = this._ironFormElementUnregisterEvent.bind(this);
		this._valueChangedEvent = this._valueChangedEvent.bind(this);
		this._sendRequestEvent = this._sendRequestEvent.bind(this);
		this._urlHistoryQueryEvent = this._urlHistoryQueryEvent.bind(this);
		this._urlValueChangedEvent = this._urlValueChangedEvent.bind(this);
		this._suggesionsOpenedChangedEvent = this._suggesionsOpenedChangedEvent.bind(this);
		this._onInvalidChanged = this._onInvalidChanged.bind(this);
		this._onValueChanged = this._onValueChanged.bind(this);
		this._onSuggesionsOpenedChanged = this._onSuggesionsOpenedChanged.bind(this);
	}

	componentDidMount() {
		this._refElement.addEventListener('invalid-changed', this._invalidChangedEvent);
		this._refElement.addEventListener('iron-form-element-register', this._ironFormElementRegisterEvent);
		this._refElement.addEventListener('iron-form-element-unregister', this._ironFormElementUnregisterEvent);
		this._refElement.addEventListener('value-changed', this._valueChangedEvent);
		this._refElement.addEventListener('send-request', this._sendRequestEvent);
		this._refElement.addEventListener('url-history-query', this._urlHistoryQueryEvent);
		this._refElement.addEventListener('url-value-changed', this._urlValueChangedEvent);
		this._refElement.addEventListener('suggesions-opened-changed', this._suggesionsOpenedChangedEvent);
		if (this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (this.props.validator) {
			this._refElement.validator = this.props.validator;
		}
		if (this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		this._refElement.addEventListener('invalid-changed', this._onInvalidChanged);
		if (this.props.validatorType) {
			this._refElement.validatorType = this.props.validatorType;
		}
		if (this.props.name) {
			this._refElement.name = this.props.name;
		}
		if (this.props.value) {
			this._refElement.value = this.props.value;
		}
		this._refElement.addEventListener('value-changed', this._onValueChanged);
		if (this.props.required) {
			this._refElement.required = this.props.required;
		}
		if (this.props.detailsOpened) {
			this._refElement.detailsOpened = this.props.detailsOpened;
		}
		if (this.props.defaultProtocol) {
			this._refElement.defaultProtocol = this.props.defaultProtocol;
		}
		if (this.props.suggesionsOpened) {
			this._refElement.suggesionsOpened = this.props.suggesionsOpened;
		}
		this._refElement.addEventListener('suggesions-opened-changed', this._onSuggesionsOpenedChanged);
		if (this.props.colapseTransitioning) {
			this._refElement.colapseTransitioning = this.props.colapseTransitioning;
		}
	}

	componentWillUnmount() {
		this._refElement.removeEventListener('invalid-changed', this._invalidChangedEvent);
		this._refElement.removeEventListener('iron-form-element-register', this._ironFormElementRegisterEvent);
		this._refElement.removeEventListener('iron-form-element-unregister', this._ironFormElementUnregisterEvent);
		this._refElement.removeEventListener('value-changed', this._valueChangedEvent);
		this._refElement.removeEventListener('send-request', this._sendRequestEvent);
		this._refElement.removeEventListener('url-history-query', this._urlHistoryQueryEvent);
		this._refElement.removeEventListener('url-value-changed', this._urlValueChangedEvent);
		this._refElement.removeEventListener('suggesions-opened-changed', this._suggesionsOpenedChangedEvent);
		this._refElement.removeEventListener('invalid-changed', this._onInvalidChanged);
		this._refElement.removeEventListener('value-changed', this._onValueChanged);
		this._refElement.removeEventListener('suggesions-opened-changed', this._onSuggesionsOpenedChanged);
	}

	componentDidUpdate(pp) {
		if (pp.eventsTarget !== this.props.eventsTarget) {
			this._refElement.eventsTarget = this.props.eventsTarget;
		}
		if (pp.validator !== this.props.validator) {
			this._refElement.validator = this.props.validator;
		}
		if (pp.invalid !== this.props.invalid) {
			this._refElement.invalid = this.props.invalid;
		}
		if (pp.validatorType !== this.props.validatorType) {
			this._refElement.validatorType = this.props.validatorType;
		}
		if (pp.name !== this.props.name) {
			this._refElement.name = this.props.name;
		}
		if (pp.value !== this.props.value) {
			this._refElement.value = this.props.value;
		}
		if (pp.required !== this.props.required) {
			this._refElement.required = this.props.required;
		}
		if (pp.detailsOpened !== this.props.detailsOpened) {
			this._refElement.detailsOpened = this.props.detailsOpened;
		}
		if (pp.defaultProtocol !== this.props.defaultProtocol) {
			this._refElement.defaultProtocol = this.props.defaultProtocol;
		}
		if (pp.suggesionsOpened !== this.props.suggesionsOpened) {
			this._refElement.suggesionsOpened = this.props.suggesionsOpened;
		}
		if (pp.colapseTransitioning !== this.props.colapseTransitioning) {
			this._refElement.colapseTransitioning = this.props.colapseTransitioning;
		}
	}

	_invalidChangedEvent(e) {
		if (this.props.onInvalidChanged) {
			this.props.onInvalidChanged(e.detail, e);
		}
	}

	_ironFormElementRegisterEvent(e) {
		if (this.props.onIronFormElementRegister) {
			this.props.onIronFormElementRegister(e.detail, e);
		}
	}

	_ironFormElementUnregisterEvent(e) {
		if (this.props.onIronFormElementUnregister) {
			this.props.onIronFormElementUnregister(e.detail, e);
		}
	}

	_valueChangedEvent(e) {
		if (this.props.onValueChanged) {
			this.props.onValueChanged(e.detail, e);
		}
	}

	_sendRequestEvent(e) {
		if (this.props.onSendRequest) {
			this.props.onSendRequest(e.detail, e);
		}
	}

	_urlHistoryQueryEvent(e) {
		if (this.props.onUrlHistoryQuery) {
			this.props.onUrlHistoryQuery(e.detail, e);
		}
	}

	_urlValueChangedEvent(e) {
		if (this.props.onUrlValueChanged) {
			this.props.onUrlValueChanged(e.detail, e);
		}
	}

	_suggesionsOpenedChangedEvent(e) {
		if (this.props.onSuggesionsOpenedChanged) {
			this.props.onSuggesionsOpenedChanged(e.detail, e);
		}
	}

	_onInvalidChanged(e) {
		if (this.props.onInvalidChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onInvalidChanged(value, e);
		}
	}

	_onValueChanged(e) {
		if (this.props.onValueChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onValueChanged(value, e);
		}
	}

	_onSuggesionsOpenedChanged(e) {
		if (this.props.onSuggesionsOpenedChanged) {
			var value = e.detail ? e.detail.value : undefined;
			this.props.onSuggesionsOpenedChanged(value, e);
		}
	}

	hasValidator() {
		this._refElement.hasValidator();
	}

	validate(value) {
		this._refElement.validate(value);
	}

	open() {
		this._refElement.open();
	}

	encodeParameters() {
		this._refElement.encodeParameters();
	}

	decodeParameters() {
		this._refElement.decodeParameters();
	}

	encodeQueryString(str) {
		this._refElement.encodeQueryString(str);
	}

	decodeQueryString(str) {
		this._refElement.decodeQueryString(str);
	}

	render() {
		return (
			<div>
				<url-input-editor
				  ref={(element) => {this._refElement = element;}}/>
			</div>
		);
	}
}

var polyfill = "<script>window.Polymer={dom:'shadow'};(function(){";
polyfill += "'use strict';var onload=function(){if(!window.HTMLImports){";
polyfill += "document.dispatchEvent(new CustomEvent('WebComponentsReady',";
polyfill += "{bubbles:true}));}};var webComponentsSupported=";
polyfill += "('registerElement'in document&&'import'in document.";
polyfill += "createElement('link')";
polyfill += "&&'content'in document.createElement('template'));if(!";
polyfill += "webComponentsSupported){var script=document";
polyfill += ".createElement('script');";
polyfill += "script.async=true;script.src='BASEPATH/webcomponentsjs";
polyfill += "/webcomponents-lite.min.js';script.onload=onload;document";
polyfill += ".head.appendChild";
polyfill += "(script);}else{document.addEventListener('DOMContentLoaded'";
polyfill += ",function(){onload();});}})();</script>";
/**
 * Use this function to add WC polyfill script declaration.
 *
 * @param {?String} basePath - Path to the polyfill directory
 * @return {String} A `script` HTML tag declaration
 */
export const polyfillScript = (basePath) => polyfill.replace('BASEPATH', basePath || '');
/**
 * Use this function to import ARC components.
 *
 * @param {?String} basePath - Path to the import file's directory
 * @return {String} A `link` HTML tag declaration pointing to the import file
 */
export const arcImport = (basePath) => '<link rel="import" href="BASEPATH/import.html">'.replace('BASEPATH', basePath || '');
