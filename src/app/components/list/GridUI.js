import React, { Component } from 'react';
import GridTempalteUI from './GridTemplateUI'

class GridUI extends Component {




    row = (data)=>{

        const collection = this.props.collection;
        const CellRender = this.props.cellRender;
        if(CellRender && CellRender.prototype instanceof GridTempalteUI){
        const comps = [];
            let index=0;
            for (const item of collection){
                comps.push(<div className="divTableRow" key={'DataCollectionUI-ItemKey'+ (index++)}>
                                <CellRender data={item} index={index}
                                            onSelectedEvent={this.onParentLevelSelectedEvent}>

                                </CellRender>
                    </div>);
            }
            return <div className="data-collection-ui">
                    {comps}
                    {CustomFooter && <CustomFooter name="jawath"/>}
                </div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }

    render() {




        return (
            <div>
                {/* 
                    for each item  create child 
                    selected item list  ?
                    page context
                    disabled item ?
                    unselectable item

                */}
                

            </div>
        );
    }
}

export default GridUI;
