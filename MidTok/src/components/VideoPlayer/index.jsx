const videoSrc = "https://www.tiktok.com/@raprealyfreestyle/video/7262527847808519430?is_from_webapp=1&sender_device=pc";

export default function VideoPlayer() {
  return (
    <video
    autoPlay
    muted
     src={videoSrc} 
     controls 
     />

  );
}

