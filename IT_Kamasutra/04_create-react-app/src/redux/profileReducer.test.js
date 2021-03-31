import React from 'react'
import profileReducer, {addPostActionCreator, deletePostActionCreator} from './profileReducer'

let state = {
    posts : [
        { id: 1, likescount: 1, post: 'Hi, how are you?' },
        { id: 2, likescount: 11, post: 'It\'s my first post' }
    ]
};

it('profileReducer: new post has to been added', () => {
    // Initial data
    let action = addPostActionCreator('new post')
   

    // action
    let newState = profileReducer(state, action);

    // what we expect: newState.posts.length === 3
    expect(newState.posts.length).toBe(3)
});

it('profileReducer: message of new post is', () => {
    // Initial data
    let action = addPostActionCreator('new post')

    // action
    let newState = profileReducer(state, action);

    // what we expect: post: 'new post'
    expect(newState.posts[newState.posts.length - 1].post).toBe('new post')
});

it('profileReducer: length posts has to be == 1', () => {
    // Initial data
    let action = deletePostActionCreator(1)
   
    // action
    let newState = profileReducer(state, action);

    // what we expect: newState.posts.length == 1
    expect(newState.posts.length).toBe(1)
});

