import noImage from '../assets/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;