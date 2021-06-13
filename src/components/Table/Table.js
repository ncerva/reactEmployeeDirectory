import React from "react";
import API from "../../utils/api";
import Search from "../Search/Search";


class Table extends React.Component {
    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    render () {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                search={this.state.search} />
                <div className="table-responsive">
                    <table className="table table-striped table-resposive text-center table-hover">
                        <thead>
                            <tr>
                                <th>First Name <span className="downArrow" onClick={this.sortByFirstName}></span></th>
                                <th>Last Name <span className="downArrow" onClick={this.sortByLasttName}></span></th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                    {
                        this.state.results && this.state.results.map(item =>
                        item.name.first.toLowerCase().includes(this.state.search) ? 
                        <tbody>
                            <tr>
                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td>{item.name.first}</td>
                                <td>{item.name.last}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                
                            </tr>
                        </tbody>
                        :
                        item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody>
                            <tr>
                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td>{item.name.first}</td>
                                <td>{item.name.last}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                
                            </tr>
                        </tbody>
                        :
                        null
                    )}
                    </table>

                </div>
            </div>
        )
    }
}
export default Table;