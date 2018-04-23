import React, { Component } from 'react';
import GridCellTemplateUI from './GridCellTemplateUI'

class GridUI extends Component {




    
    render() {

            {/* 
                                for each item  create child 
                                selected item list  ?
                                page context
                                disabled item ?
                                unselectable item

                            */}


        const collection = this.props.collection;
        const ContentCellRender = this.props.contentCellRender;
        if(ContentCellRender && ContentCellRender.prototype instanceof GridCellTemplateUI){
        const comps = [];
            let index=0;
            for (const item of collection){
                comps.push(<div className="divTableRow" key={'DataCollectionUI-ItemKey'+ (index++)}>
                    <ContentCellRender data={item} index={index}
                                   onSelectedEvent={this.onParentLevelSelectedEvent}>

                    </ContentCellRender>


                </div>);
            }
            return <div className="data-collection-ui">
                    {comps}
   
                </div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }
}

export default GridUI;
