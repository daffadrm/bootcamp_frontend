import React, { Component } from 'react'
import { listCategory, deleteCategory } from '../api/api-category'
import { TableCategory } from './TableCategory'
import AddEditForm from '../Form/AddEditForm'

export default class Category extends Component {


    // 1. declare category [] state
    state = {
        category: [],
        dataEditRow: null,
        isModalShow: false
    }
    componentDidMount() {
        this.showListCategory();
    }

    showListCategory = () => {
        listCategory().then(data => {
            this.setState({
                category: data
            })
        })
    }

    // onShowModel = (value)=>{
    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
    }

    // render(){
    //     const {category, isModalShow} = this.state;
    onEditRow = (value) => {
        this.setState({
            dataEditRow: value
        })
        this.onShowModal(true);
        this.onRefreshTable();
    }

    onDeleteRow = (value) => {
        deleteCategory(value).then(response => {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        })

        this.onRefreshTable();
    }

    onRefreshTable = () => {
        this.showListCategory();
    }
    render() {
        const { category, isModalShow, dataEditRow } = this.state;
        return (
            <>

                <TableCategory category={category}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setEdit={this.onEditRow}
                ></TableCategory>
                {
                    (isModalShow ? (
                        <AddEditForm
                            setShowModal={this.onShowModal}
                            setRefreshTable={this.onRefreshTable}
                            category={dataEditRow}
                        />) : null)
                }
            </>
        )
    }
}