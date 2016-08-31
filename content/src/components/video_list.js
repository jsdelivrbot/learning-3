import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// video list item
	const VideoItems = props.videos.map((video) => {
		console.log(video);
		return(
			<VideoListItem 
			  onVideoSelect={props.onVideoSelect}
			  key={video.etag} 
			  video={video} 
			/>
		); 
	});

	return (
		// list videos
		<ul className="col-md-8 list-group">
			{VideoItems}
		</ul>
	);
};

export default VideoList;