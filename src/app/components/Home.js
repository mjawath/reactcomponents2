import React from "react";
import Button from "./Button";
import Form from "./Form";
import GridUI from "./list/GridUI";
import GridCellTemplateUI from "./list/GridCellTemplateUI";

export class Home extends React.Component {


    constructor() {       
        super();
        
        this.state= {
            busObj:{fname:"sample"}
        };

        this.myData = [{id:"Te88st",name:"t hhh",desc:" hdhh"},
        {id:"Test",name:"t hhh",desc:" juju"},
        {id:"56",name:"t77 njujuame",desc:" juju"},
        {id:"7",name:"gyukname",desc:" ujuju"}];
        for(let x=0;x<1000;x++){
            this.myData.push({id:"7"+x,name:"gyukname"+x,desc:" ujuju"+x})
        }

    }

    testButton=(e)=>{
        console.log("Home" );
        console.log(e);        
    }
    onChange= (name,value)=> {
        
        this.setState(()=>{this.state.busObj[name]= value});

    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <Button text="my button" event={this.testButton}></Button>
                <Form onChange={this.onChange} data={this.state.busObj} ></Form>                


            <GridUI collection={this.myData} contentCellRender={ItemRender}
                              onSelect={this.props.onSelectItem} />
            
           

            </div>
        );
    }
}

class ItemRender extends GridCellTemplateUI{

    render(){
        const item = this.props.data;
        return <div>
         <div className="data-collection-cell">{item.name}</div>
            <div className="data-collection-cell">{item.desc}</div>
            <div className="data-collection-cell">{item.id}</div>
        </div>
    }
}