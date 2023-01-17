import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from 'axios';

export default class DataComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
    }
}

componentDidMount(){
    axios
    .get('http://127.0.0.1:8000/api/posts')
    .then(res => {
        // console.log(res.data);
        const posts = res.data;
        this.setState({posts})
    })
    .catch (error => {
        console.log(error);
    })
}
render() {
    const {posts} = this.state
    return (
        <Container>
            <br></br>
            <h3>Data Post</h3>
            <Table className="mt-1" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Content</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map((post) =>(
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.image}</td>
                        <td>{post.content}</td>
                        <td></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
  }
}