// import
import React from 'react';
import VideoListItem from './video-list-item';

// const component
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video = {video} 
			/>
		)
	});
	// return jsx
	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

// export
export default VideoList;