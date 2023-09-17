const videoSrc = '<video preload="auto" src="https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/oMgRAze0pInRfHSA4CpAbDDfT1EgGvLFkYWfAE/?a=1988&amp;ch=0&amp;cr=3&amp;dr=0&amp;lr=unwatermarked&amp;cd=0%7C0%7C0%7C3&amp;cv=1&amp;br=6240&amp;bt=3120&amp;bti=NDU3ZjAwOg%3D%3D&amp;cs=0&amp;ds=6&amp;ft=_RwJrBBqq8Zmo-7YeQ_vjSaiPAhLrus&amp;mime_type=video_mp4&amp;qs=0&amp;rc=NWc6aDQ3aTk7OGc8O2Q3OkBpMzxmajY6ZjppbTMzNzczM0A0My4yLzJhNV8xYDFiMS81YSMuLm1zcjRvcm5gLS1kMTZzcw%3D%3D&amp;btag=e000a0000&amp;expire=1695084677&amp;l=2023091700443531AFA3EEFC6727AD8F42&amp;ply_type=2&amp;policy=2&amp;signature=5f688a0551918f8bac5f444ab4ca7d40&amp;tk=tt_chain_token" crossorigin="use-credentials" style="width: 100%; height: 100%;"></video>'

export default function VideoPlayer() {
    return (
      <video src={videoSrc} controls />
    );
  }
  
