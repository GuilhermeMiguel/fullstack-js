import React, { Component } from 'react';
 

class Feed extends Component {
    
    render() {
        return(
            <div>
                              <h3>{this.props.username}</h3>
                  <p>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas /' 
                        : this.props.curtidas+ ' curtida / '}</p>
                    <p>{this.props.comentarios > 1 ? this.props.comentarios + ' comentarios ' 
                        : this.props.comentarios + ''}</p>

            </div>
        );
    }
}

export default Feed;