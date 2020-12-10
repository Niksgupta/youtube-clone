import React from 'react';

class SearchBar extends React.Component{
    state= {
        searchTerm: ''
    };


    onInputChange = (event) =>{
        this.setState({searchTerm: event.target.value})
    };
    
    onFormSubmit = (event) =>{
        event.preventDefault();
        //call back from parent
        this.props.onFormSubmit(this.state.searchTerm);
    };

    render(){
        return(
            <>
             <form onSubmit = {this.onFormSubmit}>
                 <div className="form-group">
                     <input 
                     type="search"
                     className="form-control"
                     placeholder="Search Anything Interesting!!" 
                     value= {this.state.searchTerm}
                     onChange = {this.onInputChange}
                     />
                 </div>
             </form>

            </>
        )
    }
}
export default SearchBar;