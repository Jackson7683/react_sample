import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';   //Libraries does not need to be absolute path
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';    // This file has to be absolute path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBVd4FhP5n34iK3rEqQrHT8laobGgHyGKA';
// make sure this key is enabled in "console.developers.google.com" in the project

//YTSearch is a function, it takes an object as input, and second paramter is a callback function
// YTSearch({key: API_KEY, term: 'surfboard'}, function(data){
//     console.log(data);
// });

// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// } 

/** In order to persist search data in this component, 
        convert this function based component to class based component

    Persisting data in the outer most component, so that it can be easily inherited, 
        say, can be inherited by the VideoList component.
    
    The data will be inherited through props, which we always super from the parent in 
        childern's constructor. 
        
    It is defined as a 'property' within the tag, very much like using the directive attributes 
        to pass data in angular js, difference in syntax is no "" is needed in the template,
                property = {this.state.XXX}
        so that it can be differentiated from normal html attributes

    In class based component, props and state can be accessed anywhere in the class block by using this.props 
        and this.state; 
    while in function based component, props and state needs to be passed as arguments, and No 'this' keyword 
        is needed.

    In order to keep the status of selected video, it needs to be persist in the state, but the selection of video 
        is actually happened in the video_list_item level, therefore, we define the whole selection function to 
        manipulate the data in the state, and pass the whole function as a property (event actually). Since js object
        is referenced by address, we can actually manipulate parent data on the child level.
    This is like the angular event handling callback.

    In order to trigger the search every time search terms changes, we need to write a function to call the YTSearch 
        on this level, but also needs to update the state of the search bar in the child level. Therefore, we pass a 
        callback function that calls YTSearch as a property through props, and call it in the search bar on change event.

    In order to make sure the search term onChange event not be triggered every time content change, a debaunce function is
        needed, it can be using lodash, underscore or even plain js
*/

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null,
        };

        // then move the search function to constructor so that it is called in initial loading
        this.videoSearch('surfboard');
     }

     videoSearch(term){
         YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
            // same as this.setState({ videos: videos, selectedVideo: videos[0] });
            console.log(this.state.videos);
        });
     }
    
    render(){
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
        // this will return a debounced function of this.videoSearch that will only be executed every 0.3s.

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos= {this.state.videos} />
            </div>
        );
    } 
}

ReactDOM.render(<App />, document.querySelector('.container'));