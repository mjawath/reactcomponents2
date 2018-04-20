import React, {Component} from 'react';
import {PRODUCTS,Items} from "./MockData";
import DataTemplateUI from './DataTemplateUI';
import DataCollectionUI from './DataCollectionUI';
import OutSide from './OutSide';
import MyCustomDataTem from './MyCustomDataTem';


let myitems = ["item--1","item--2","item--3","item--4","item--5","item--6"];

const myRenderer = ({data,index,onSelectedEvent})=>{
    return <div>
        <span>my tag cool {index}--{data}  </span>
        <button className="button" onClick={()=>this.test(data)}>push</button>
        <button onClick={onSelectedEvent}>parent method called</button>
    </div>;
};

const test = ({name})=>{
    return <div><span>my paaaaaaaaaaaaaaa {name}</span></div>
};

class Mylist extends Component {


    render() {
        return (
            <div className="App">
                <h2>Welcome to test list</h2>
                {/*<FilterableProductTable products={PRODUCTS}/>*/}

                <DataCollectionUI collection={Items} footer = {OutSide} contentRender={MyCustomDataTem}>

                </DataCollectionUI>
                {/*{myRenderer({data:'test',index:27,onSelectedEvent:this.overiddenTest})}*/}

            </div>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return <tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>;
    }
}

class ProductRowCustom extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <td>

                <span><span>my test custom component----------------</span>{name}</span>
                <span>{this.props.product.price}</span>
            </td>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <span>
                <span>{name}</span>
                <span>{this.props.product.price}</span>
            </span>
        );
    }
}
// https://facebook.github.io/react/docs/thinking-in-react.html
class ProductTable extends React.Component {

    render() {
        let rows = [];
        let lastCategory = null;
        let parent = this;

        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            // rows.push(<ProductRow product={product} key={product.name} />);
            rows.push(parent.props.children(product,"checkout "));
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}>
                    {(product,mystring) =>
                        <tr key={product.name}>
                            <td>This is 333333 item {product.name} in the list</td>
                            <ProductRowCustom product={product} />
                            {mystring}
                        </tr>
                    }
                </ProductTable>


                <ProductTable products={Items}>
                    {(product,mystring) =>
                        <tr key={product.name}>
                            <td>This is 333333 item {product.category1} in the list</td>
                            <ProductRowCustom product={product} />
                            {mystring}
                        </tr>
                    }
                </ProductTable>
            </div>
        );
    }
}

export default Mylist;