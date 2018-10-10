import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Form} from './components/index';

const forminit = {
    id: '',
    class: 'classname',
    method: 'post',
    action: '',
    inputs: [
        {name: 'name', value: '233', default: '', limit: 7,change:change},
        {name: 'work', type: 'textarea', value: '2018',change:change},
        {name: 'select', type: 'select', default: '0',
            opts: [
                {desc: '0', disable: true},
                {desc: '1', value: '1'},
                {desc: '2', value: '2'},
            ],
        },
    ],
    children: (<div>这是一个链接</div>),
};


function submit(e){
    console.log(e.map);
}

function change(e){
    console.log('233')
}

ReactDOM.render(<Form forminit={forminit} submit={submit} change={change}/>, document.getElementById('app'));

serviceWorker.unregister();
