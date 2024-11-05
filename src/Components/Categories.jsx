import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "Losers club",
                    name: "Losers club"
                },
                {
                    key: "ISUUS22",
                    name: "ISUUS22"
                },
                {
                    key: "Children",
                    name: "Children"
                },
                {
                    key: "all",
                    name: "all"
                }
            ]
        }
    }
    render() {
        return(
            <div className = "Categories">
                {this.state.categories.map(el => (
                    <div key = {el.id} onClick = {()=> this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories