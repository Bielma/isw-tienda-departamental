import React, {Component} from 'react';

class Articulos extends Component{

    


    render(){
        const {articulo, precio, cantidad} = this.props.articulos;
        return(
            <article className = "article-item" id = "article-template">
                <div className= "image-wrap">



                </div>
            </article>
        );
    }
}

export default Articulos;