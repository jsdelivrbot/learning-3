// import
import React from 'react';

// component function
const VideoListItem = ({video, onVideoSelect}) => {

// image url 
const imageUrl = video.snippet.thumbnails.default.url;
// title url
const titleItem = video.snippet.title;
	console.log(video);

	// return jsx
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} className="media-object" />
				</div>
				<div className="media-body"> 
					<div className="media-heading"> 
						{titleItem}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;