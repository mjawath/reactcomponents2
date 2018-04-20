
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataTemplateUI from './DataTemplateUI';
import './DataCollectionUI.css';

const RendererClass = DataTemplateUI;

class DataCollectionUI extends Component{



    //arrow function preserves the this context
    itemEventTest =()=>{
        console.log(" DataCollectionUI itemEventTest");
    }
    customeE(dat){
        console.log("-----------customeE----");
        console.log(dat);
    }
    onParentLevelSelectedEvent=(params)=>{

        console.log("onParentLevelSelectedEvent "+ ++this.testCounter );
        console.log(params.name)
    }

    constructor(props){
        super(props);
        this.customeE = this.customeE.bind(this);
        // this.onParentLevelSelectedEvent = this.onParentLevelSelectedEvent.bind(this);
        this.testCounter = 0;
    }




    setItems(data){

    }

    render(){
        const  CustomFooter =this.props.footer;// capitalisation is importent without it , this is not working
        const collection = this.props.collection;
        const ContentRender = this.props.contentRender;
        if(ContentRender && ContentRender.prototype instanceof RendererClass){
        const comps = [];
            let index=0;
            for (const item of collection){
                comps.push(<div className="divTableRow" key={'DataCollectionUI-ItemKey'+ (index++)}>
                    <ContentRender data={item} index={index}
                                   onSelectedEvent={this.onParentLevelSelectedEvent}>

                    </ContentRender>
                    <button onClick={()=>   this.props.onSelect(item)}>view</button>
                    <button onClick={this.itemEventTest}>parent edit</button>

                </div>);
            }
            return <div className="data-collection-ui">
                    {comps}
                    {CustomFooter && <CustomFooter name="jawath"/>}
                </div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }
}

DataCollectionUI.propTypes = {

        collection: PropTypes.array.isRequired,
        contentRender: PropTypes.func,
        footer: PropTypes.func,
        itemEvent: PropTypes.func,
        selectedItem: PropTypes.object,
        onSelect: PropTypes.func

}
export default DataCollectionUI;
