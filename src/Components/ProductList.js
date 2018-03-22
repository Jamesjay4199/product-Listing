import React, {Component} from 'react';
import Product from "./Product";
import Seed from "../seed";

class ProductList extends Component{
    constructor(props){
        super(props);

        this.state={
            products: [],
        };
    }
    componentDidMount(){
        this.setState({products: Seed.products});
    }
    handleProductVote =(productId)=>{
        const nextProducts = this.state.products.map((product)=>{
            if (product.id === productId) {
                console.log(productId + ' was upvoted.');
                // return Object.assign({}, product, {
                //     votes: product.votes + 1,
                // });
                return {
                    ...product,
                    votes: product.votes+1
                };
            }else{
                console.log(productId + ' was not upvoted.');
                return product
            }
        })

        this.setState({
            products: nextProducts,
        })
        
    }
    handleProductDownVote=(productId)=>{
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                console.log(productId + ' was upvoted.');
                // return Object.assign({}, product, {
                //     votes: product.votes + 1,
                // });
                return product.votes--;
            } else {
                console.log(productId + ' was not upvoted.');
                return product
            }
        })

        this.setState({
            products: nextProducts,
        })
    }
    render(){
        const products = Seed.products.sort((a, b)=>{
             return b.votes - a.votes
        }

        );
        const productList = Seed.products.map(product=>{
            const { id, title, description, url, votes, submitterAvatarUrl, productImageUrl } = product
            return (
                    <Product
                        key={'product-' + product.id}
                        id={id}
                        title={title}
                        description={description}
                        url={url}
                        votes={votes}
                        submitterAvatarUrl={submitterAvatarUrl}
                        productImageUrl={productImageUrl}
                        onVote={this.handleProductVote}
                        downVote={this.handleProductDownVote}
                    />
            )
        });

        return(
            <div className="container">
                <h1>Popular products</h1>
                <hr />
                {productList}
            </div>
        );

    }
}

export default ProductList;