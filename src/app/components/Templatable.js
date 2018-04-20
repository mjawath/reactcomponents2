import React, {Component} from 'react';


// https://facebook.github.io/react/docs/thinking-in-react.html
class Container extends Component {

    render() {
        let data = this.props.data;
        let childContent = this.props.children(data);
        console.log(data);
        console.log(childContent);
        return (
            <div>
                {childContent}
            </div>
        );
    }
}

export default Container;