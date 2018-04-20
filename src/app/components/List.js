import React, {Component} from 'react';


// https://facebook.github.io/react/docs/thinking-in-react.html
class List extends Component {

    render() {
        let rows = [];
        let context = this;
        let idx =0;
        this.props.collection.forEach(function (item) {
            idx++;
            rows.push( <li key={idx}> { context.props.children(idx,item)}</li> );

        });
        return (
            <ul>
               {rows}
            </ul>
        );
    }
}

export { List as default};