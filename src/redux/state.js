let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you doing ?', likesCount: 12 },
                { id: 2, message: 'My first post', likesCount: 23 },
                { id: 2, message: 'Privet', likesCount: 23 },
                { id: 2, message: 'Have good day', likesCount: 23 }],
            newPostText: 'it-lamasutra.com'
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Kate' },
                { id: 2, name: 'Rey' },
                { id: 3, name: 'Gavrysha' },
                { id: 4, name: 'Elsa' },
                { id: 5, name: 'Lenchik' },
                { id: 6, name: 'Remys' }],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Shshshs' },
                { id: 4, message: 'How are you doing ?' },
                { id: 5, message: 'Hey' },
                { id: 6, message: 'Whatsup?!' },
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log ('State changed')
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber( this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber( this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
    
}

export default store
window.store = store
