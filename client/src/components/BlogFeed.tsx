import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBlogPosts, fetchBlogPostById, createNewBlogPost } from '../store/actions/blogFeedActions'

import { Card, CardTitle, CardSubtitle, CardBody, Form, Button, Label, Input } from 'reactstrap';

const BlogFeed: React.FC = (props:any) => {
    const [searchInput, setSearchInput] = useState<string>('')
    // const [addFav, setAddFaves] = useState<any>([])
    // const [toggleFav, setToggleFav] = useState<boolean>(false)
    // console.log('fff',addFav, 'togle',toggleFav)
    
    
    useEffect(() => {
        props.fetchBlogPosts()
    }, [])

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value) 
        console.log(searchInput) 
    }

    // const handleClick = (event:React.MouseEvent, id:any) => {
    //     event.preventDefault()
    //    console.log(props.)
    // } 
   
    return (
        <div className='feed-container'>
            <Form>
                <Label htmlFor='search-bar'>
                    <Input 
                        type='text' 
                        name='search-bar'
                        id='search-bar'
                        placeholder='Search for a Blog Post'
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </Label>
            </Form>
            {props.feed &&
                props.feed.filter(( post:any) => {
                    return (
                        post.title.toLowerCase().includes(searchInput.toLowerCase()) || 
                        post.username.toLowerCase().includes(searchInput.toLowerCase())
                    )
                })
                .map((post:any) => (
                <Card body outline color="secondary" key={post.id}>
                    <CardBody>
                    <CardTitle tag='h1'>{post.title}</CardTitle>
                    <CardSubtitle tag='h2'>posted by: {post.username}</CardSubtitle>
                    <Link to={`/post/${post.id}`}>read</Link>
                    {/* <Button className='testbtn' active onClick={() => {
                        setToggleFav(!toggleFav)
                        console.log(addFav.indexOf(post))
                        if (toggleFav === true) {
                            addFav.map((fav:any) => {
                                if (fav.id === post.id) {
                                    addFav.splice(addFav.indexOf(post))
                                }
                            })
                        }
                        else {
                            setAddFaves([...addFav, post])
                        }
                       
                    }}>
                        add</Button> */}
        
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        feed: state.blogFeedReducer.feed,
        blogPost: state.blogFeedReducer.blogPost,
        favorites: state.favoritesReducer.favorites,
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }
}

export default connect(mapStateToProps, { fetchBlogPosts,  fetchBlogPostById, createNewBlogPost })(BlogFeed)