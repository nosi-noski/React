import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';
import {Field,reduxForm} from 'redux-form';
import { required, maxLengthThunkCreator } from './../../../utils/validators/validators'
import {TextArea} from './../../Common/FormControls/FormControls' 
const maxLength10 = maxLengthThunkCreator(10);
const MyPost = (props) => { 
 
    let onAddPost = (value) => {
        console.log('onAddPost')
        props.addPost(value.newPostText);
    };

    let onChosePost = (id) => {
        props.chosePost(id);
    };

    let onRemovePost = () => {
        props.removePost();
    };

    let newPostElement = React.createRef();
    let postElements = props.posts.map((p)=><Post message={p.post} 
                                                  likescount={p.likescount} 
                                                  key={p.id.toString()} 
                                                  chosePost={()=>{onChosePost(p.id)} }/>)

    return (
        <div className={classes.myPostsWrapper}>
            <h3>my-post</h3>
            <div className = {classes.newPostArea}>
               <MyPostReduxFrom onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
             <div className={classes.newTextArea}>
                    <Field 
                        component={TextArea}
                        name="newPostText" 
                        placeholder="New post"
                        validate={ [required, maxLength10] }
                    />
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button>Add Post</button>
                    </div> 
                    <div className={classes.textRemove}>
                        <button>Remove Post</button> 
                    </div> 
                </div>
        </form>
    )
}

const MyPostReduxFrom = reduxForm({form: "AddPostForm"})(AddPostForm)

export default MyPost;