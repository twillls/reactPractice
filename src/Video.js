function Video({src}) {
  return (
    <div>
      <video controls autostart autoPlay mute src={src}/>
    </div>
  );
};
export default Video;