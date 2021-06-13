import React from 'react';

const Search = (props) => {
    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={props.handleInputChange}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search Name
                    </button>
            </form>

                </div>
    )
}

export default Search;