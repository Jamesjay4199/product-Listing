import React, {Component} from "react";
class Product extends React.Component{
    handleUpVote = ()=>{
        this.props.onVote(this.props.id);
    }
    handleDownVote = () => {
        this.props.downVote(this.props.id);
    }
    render(){
        const { productImageUrl, votes, url, title, description, submitterAvatarUrl} = this.props;
        return(
            <div className='container'>
                <div className="row">
                    <div className='col-md-12'>
                        <div className='main'>
                            <div className="image">
                                <img src={productImageUrl} /> 
                            </div>
                            <div className='header'>
                                <a onClick={this.handleUpVote}>
                                    <i className='fa fa-2x fa-caret-up' />
                                </a>
                                <a onClick={this.handleDownVote}>
                                    <i className='fa fa-2x fa-caret-down' />
                                </a>
                                {votes}
                            </div>
                            <div className='description'>
                                <a href={url}>
                                    {title}
                                </a>
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className='extra'>
                                <span>Submitted by:</span>
                                <img
                                    className='avatar'
                                    src={submitterAvatarUrl}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;