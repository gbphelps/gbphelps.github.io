document.addEventListener('DOMContentLoaded', () => {

    const features = Array.from(document.getElementsByClassName('feature')).filter(f => 
        !Array.from(f.classList).includes('no-video')
    )
    
    features.forEach(f => {
        const video = f.getElementsByTagName('video')[0];
        video.loop = true;

        video.addEventListener('mouseenter',()=>{
            features.forEach(f => {
                const video = f.getElementsByTagName('video')[0];
                video.pause();
            })
            video.play();
        })
    })
})