import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept, onDelete }) {
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} className="btn-save">Sort By Name</button>
                <button onClick={handleSortByDept} className="btn-save">Sort By Department</button>
                <form>
                <input
                    class='form-control form-control input'
                    value={searchTerm} // in sync search
                    onChange={onSearch} // onChange listener
                    type="text"
                    placeholder="search employee"
                    onDelete={onDelete}
                    />
                </form>
            </div>
        </div>
    )
}

export default Navigation;