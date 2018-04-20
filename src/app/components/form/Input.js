/**
 * Created by jawa on 11/23/17.
 */
import React,{Component} from 'react';

const RenderLabel= (props)=>{
    const extras = props ? props.extras:{};
    return <input  {...extras} >
    </input>;
};

const RenderInput = (props)=>{
    const extras = props ? props.extras : {};
    return <input  {...extras} >
    </input>;
}
const RenderWrapper=(props)=>{
    return <div  >
        {props.children}
    </div>;
}
export default  class Input extends Component{


    render(){
        // const {extras} = this.props.extras;
        const extras = this.props.extras;
        return <RenderWrapper extras ={extras}>
                    <RenderLabel extras ={extras}/>
                    <RenderInput extras ={extras}/>
            </RenderWrapper> ;
    };

}