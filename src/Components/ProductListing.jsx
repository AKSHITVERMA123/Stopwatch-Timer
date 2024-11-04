import React, { Component } from 'react';

export default class ProductListing extends Component {
    render() {
        return (
            <div>
                {new ProductListing()}
                {this} This is Product Listing Page.
                <input type='list' value={"P1"}></input>
            </div>
        )
    }
}
