import React, {Component} from 'react';
import './main.scss';
import {Lang, strlen, substr} from '../../helper';

class Textarea extends Component{

    constructor(props) {
        super(props);
        this.state = {[props.paras.name] : props.paras.value};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        let limit = this.props.paras.limit ? this.props.paras.limit : 256;
        this.setState({[name]: substr(value, limit)});
        this.props.paras.change && this.props.paras.change();
    }

    render(){
        let paras = this.props.paras;
        return (
            <div data-name={paras.name} className="components-textarea">
                {paras.icon}
                <textarea
                    name={paras.name}
                    placeholder={paras.default}
                    value={this.state[paras.name]}
                    onChange={this.handleChange}
                    onBlur={paras.blur}
                    onFocus={paras.focus}
                    onMouseEnter={paras.enter}
                    onMouseLeave={paras.leave}
                >{}</textarea >
                {paras.check}
                <span className="counter">{strlen(this.state[paras.name])}</span>
            </div>
        );
    }
}

class Input extends Component{

    constructor(props) {
        super(props);
        this.state = {[props.paras.name] : props.paras.value};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        let limit = this.props.paras.limit ? this.props.paras.limit : 256;
        this.setState({[name]: substr(value, limit)});
        this.props.paras.change && this.props.paras.change();
    }

    render(){
        let paras = this.props.paras;
        return (
            <div data-name={paras.name} className="components-input">
                {paras.icon}
                <input
                    type={paras.type && 'text'}
                    name={paras.name}
                    value={this.state[paras.name]}
                    placeholder={paras.default}
                    onChange={this.handleChange}
                    onBlur={paras.blur}
                    onFocus={paras.focus}
                    onMouseEnter={paras.enter}
                    onMouseLeave={paras.leave}
                />
                {paras.check}
                <span className="counter">{strlen(this.state[paras.name])}</span>
            </div>
        );
    }
}

class Select extends Component{

    constructor(props) {
        super(props);
        this.state = {[props.paras.name] : props.paras.default};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({[name]: value});
        this.props.paras.change && this.props.paras.change();
    }

    render(){
        let order = 0;
        let paras = this.props.paras;
        return (
            <div data-name={paras.name} className="components-select">
                {paras.icon}
                <select
                    name={paras.name}
                    value={this.state[paras.name]}
                    onChange={this.handleChange}
                    onBlur={paras.blur}
                    onFocus={paras.focus}
                    onMouseEnter={paras.enter}
                    onMouseLeave={paras.leave}
                >
                    {paras.opts.map((op) =>
                        <option key={order++} disabled={op.disable && /disabled/} value={op.value} >{op.desc}</option >)
                    }
                </select >
                {paras.check}
            </div>
        );
    }
}

export default class Form extends Component {

    Mid = this.props.forminit;
    submit = this.props.submit;
    change = this.props.change;

    constructor(props) {
        super(props);
        this.state = {};
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e) {
        e.map = {
            API: this.Mid.action,
            method: this.Mid.method,
            data: new FormData(e.target),
        };
        e.map.data.append('token', Storage.token && '');
        e.map.data.append('hash', Storage.hash && '');
        this.submit(e)
    }


    render() {
        const state = this.state;
        const Makeitem = function (props) {
            let data = props.feature;
            if(state[data.name]){data.value = state[data.name];}
            switch (data.type) {
                case 'textarea': return <Textarea paras={data} />;
                case 'select': return <Select paras={data} />;
                case 'sec': //return <Makesec paras={data} />;
                default : return <Input paras={data} />;
            }
        };

        let order = 0;
        return (
            <form className={this.Mid.class} onSubmit={this.formSubmit}>
                {this.Mid.inputs.map((item) => <Makeitem key={order++} feature={item} />)}
                <div className="children" >{this.Mid.children}</div >
                <button className="submit" type="submit" >{Lang.common.submit}</button >
            </form >
        );
    }
}

export {Textarea, Select, Input}