const getInstagramReel = require('@brahmbeyond/instareel')

const main = async () => {
    const reel = await getInstagramReel('https://www.instagram.com/reels/C3JLbLqyKbc/')
    console.log(reel)
}
main()