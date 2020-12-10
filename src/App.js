import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './api/youtubeapi';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';


class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: ''
  };

  onSelectVideo = (video) =>{
this.setState({selectedVideo: video})  }

  onTermSubmit = async(searchTerm) =>{
   const res= await youtube.get('/search', {
      params:{
        q: searchTerm
      },
    });
    this.setState({videos: res.data.items})
    console.log(res.data)
  
  }
  render(){
    return(
     <>
     <div className="container">
       <div className="row yt">
         <h1 className="text-center col-md-12">
           <i className="fab fa-youtube-square" /> &nbsp;
           Mini Youtube Clone</h1>
       </div>
       <div className="row my-2">
         <div className="col-md-8">
           <SearchBar onFormSubmit = {this.onTermSubmit}/>
           <VideoDetails video= {this.state.selectedVideo} />

         </div>
         <div className="col-md-4">
           <VideoList videos={this.state.videos} 
            onSelectVideo = {this.onSelectVideo} />
         </div>
       </div>

     </div>
     
     </>
    )
  }
}

export default App;
